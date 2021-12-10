import theJson from './../../utils/db/serviceAccountKey.json';

export default function handler(req, res) {
  res.status(200).json(theJson)
}
