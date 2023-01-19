const { getAllNotebooks, getNotebookForId } = require('../service/notebookService');

const notebooksController = async (_req, res) => {
  const response = await getAllNotebooks();
  if (!response) return res.status(404).end();
  return res.status(200).json(response);
};

const notebookForId = async (req, res) => {
  const { id } = req.params;
  const response = await getNotebookForId(id);
  if (!response) {
    return res.status(404).send("notebook not found");
  };
  return res.status(200).send(response);
}

module.exports = { notebooksController, notebookForId };