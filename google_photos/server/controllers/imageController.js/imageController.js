const multer = require("multer");
const Images = require("../../models/Images.js");

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./images");
    },
    filename: function (req, file, cb) {
      const extention = file.mimetype.split("/")[1];
      cb(
        null,
        Date.now() + "-" + file.originalname.slice(0, -4) + "." + extention
      );
    },
  }),
}).single("imageUrl");

// Create
app.post("/image", upload, async (req, res) => {
  try {
    const body = req.body;
    const file = req.file;
    let imgUrl = `http://localhost:${port}/images/${req.file.filename}`;
    const newImage = new Images({
      imageUrl: imgUrl,
      title: file.filename,
    });
    if (file) {
      newImage.save();
      res.status(200).send(newImage);
      console.log(newImage);
      console.log(body);
    }
  } catch (error) {
    console.log(error);
  }
});

// Read
app.get("/image", async (req, res) => {
  try {
    const images = await Images.find();
    res.status(200).json({
      status: "success",
      images,
    });
  } catch (error) {
    res.json({
      status: "Fail",
      error,
    });
  }
});

// Update
app.post("/image/:id", async (req, res) => {
  req.data = await Images.findByIdAndUpdate({ _id: req.params.id });
  let data = req.data;
  data.title = req.body.title;
  data.note = req.body.note;
  try {
    data = await data.save();
    res.status(200).send(data);
  } catch (error) {
    res.status(200).send(error);
  }
});

// Delete
app.delete("/image/:id", async (req, res) => {
  try {
    const result = await Images.deleteOne({ _id: req.params.id });
    if (result.deletedCount === 1) {
      res.status(200).send("Successfully deleted one note.");
    } else {
      res.status(200).send("No note matched the query. Deleted 0 notes.");
    }
  } catch (error) {
    console.log(error);
  }
});
