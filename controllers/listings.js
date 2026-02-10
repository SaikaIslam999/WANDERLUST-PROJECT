const Listing = require("../models/listing.js");
const fetch = require("node-fetch");

module.exports.index = async(req , res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
  let {id} =  req.params;
  const listing = await Listing.findById(id)
  .populate({
    path: "reviews", 
    populate: { 
      path: "author",
     },
    }) 
    .populate("owner");
  if(!listing){
    req.flash("error", "Listing you requested for does not exist!");
    return res.redirect("/listings");
  }
  console.log(listing);
  res.render("listings/show.ejs", { listing });
};

module.exports.createListing = async (req, res, next) => {
    let url = req.file.path;
    let filename = req.file.filename;

    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = {url, filename};

    const location = req.body.listing.location;

  // Free OpenStreetMap geocoding (NO CARD)
  const geoResponse = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
      location
    )}`
  );
  const geoData = await geoResponse.json();

  if (!geoData.length) {
    req.flash("error", "Location not found. Try a valid place.");
    return res.redirect("/listings/new");
  }

  newListing.geometry = {
    type: "Point",
    coordinates: [
      Number(geoData[0].lon), // lng
      Number(geoData[0].lat), // lat
    ],
  };

    await newListing.save();
    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
  };

module.exports.renderEditListing = async (req, res) => {
  let {id} =  req.params;
  const listing = await Listing.findById(id);
  if(!listing){
    req.flash("error", "Listing you requested for does not exist!");
    return res.redirect("/listings");
  }

  let originalImageUrl = listing.image.url;
  originalImageUrl = originalImageUrl.replace("/upload/", "/upload/w_250/");

  res.render("listings/edit.ejs", { listing, originalImageUrl });
};

// module.exports.updateListing = async (req, res) => {
//   let {id} =  req.params;
//   let listing = await Listing.findByIdAndUpdate(id, {...req.body.listing});

//   if(typeof req.file !== "undefined"){
//     let url = req.file.path;
//     let filename = req.file.filename;
//     listing.image = { url, filename};
//     await listing.save();
//   }
//   req.flash("success", "Listing Updated!");
//   res.redirect(`/listings/${id}`);
// };

module.exports.updateListing = async (req, res) => {
  let { id } = req.params;

  console.log("REQ BODY =", req.body.listing);

  // listing load
  let listing = await Listing.findById(id);

  // normal fields
  listing.title = req.body.listing.title;
  listing.description = req.body.listing.description;
  listing.price = req.body.listing.price;
  listing.location = req.body.listing.location;
  listing.country = req.body.listing.country;

  console.log("EDIT LOCATION =", listing.location);

  // GEOCODING AGAIN
  if (listing.location) {
    const geoResponse = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        listing.location
      )}`
    );

    const geoData = await geoResponse.json();

    console.log("GEOCODE DATA =", geoData);

    if (geoData.length) {
      listing.geometry = {
        type: "Point",
        coordinates: [
          Number(geoData[0].lon),
          Number(geoData[0].lat),
        ],
      };
    }
  }

  // image update
  if (req.file) {
    listing.image = {
      url: req.file.path,
      filename: req.file.filename,
    };
  }

  await listing.save();

  req.flash("success", "Listing Updated!");
  res.redirect(`/listings/${id}`);
};


module.exports.destroyListing = async (req, res) => {
  let {id} =  req.params;
  const deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  req.flash("success", "Listing Deleted!");
  res.redirect("/listings");
}


