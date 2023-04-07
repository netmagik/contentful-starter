export default async (request, context) => {
  // Here's what's available on context.geo
console.log(context.geo)
  // context: {
  //   geo: {
  //     city?: string;
  //     country?: {
  //       code?: string;
  //       name?: string;
  //     },
  //     subdivision?: {
  //       code?: string;
  //       name?: string;
  //     },
  //     latitude?: number;
  //     longitude?: number;
  //     timezone?: string;
  //   }
  // }

  return context.json({
    geo: context.geo,
    header: request.headers.get("x-nf-geo"),
  });
};