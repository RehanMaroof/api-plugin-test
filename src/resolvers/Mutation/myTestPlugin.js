// import { ObjectId } from 'mongodb';

export default async function myTestPlugin(_, { input }, context) {
  console.log("Input",input);
  const resp = context.mutations.myTestPlugin(context, input)
  console.log("resp",resp);
  // const { id, name } = input; // Only allow 'id' and 'name' fields
  // const { db } = context;
  // const collection = db.collection('test');
  // const result = await collection.updateOne({ _id: ObjectId(id) }, { $set: { name } }); // Only update 'name' field
  // return result;
}