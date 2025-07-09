import { Chance } from "chance";

const chance = new Chance();
const person = {
  firstName: chance.first(),
  lastName: chance.last(),
  twitter: chance.twitter(),
  geohash: chance.geohash(),
};

const handler = (req, res) => {
  return res.status(200).json(person);
};

export default handler;
