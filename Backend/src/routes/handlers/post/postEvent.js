const postEventController = require("../../controllers/post/postEventController");

module.exports = async (req, res) => {
  const {
    name,
    initialDate,
    finalDate,
    image,
    description,
    location,
    reminder,
    category,
    hour,
  } = req.body;
  try {
    if (!name || !initialDate || !finalDate || !hour)
      throw Error("Completar la información");

    await postEventController(
      name,
      initialDate,
      finalDate,
      image,
      description,
      location,
      reminder,
      category,
      hour,
    );
    res.status(200).json("Agregado con exito!");
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};
