// src/mutation.js

// import { ObjectId } from 'mongodb';

export default async function myTestPlugin(parent, args, context,info) {
  console.log("test", args);
  // myTestPlugin: async (_, { input }, context) => {
  //   const { id, name } = input; // Only allow 'id' and 'name' fields
  //   const { db } = context;
  //   const collection = db.collection('test');
  //   const result = await collection.updateOne({ _id: ObjectId(id) }, { $set: { name } }); // Only update 'name' field
  //   return result;
  // },
};
