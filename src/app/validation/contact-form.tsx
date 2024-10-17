import {z} from "zod";

const schema = z.object({
  name: z.string().min(2, {message: "Name must be more than 1 character long"}),
  email: z.string().email({message: "Invalid email"}).min(7, {message: "Invalid email"}),
  message: z.string().min(11, {message: "Message must be longer than 10 characters"}),
});

export default function validateContent(name: string, email: string, message: string) {
  try {
    schema.parse({name, email, message});
    return {success: true};
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {success: false, error: error.errors[0].message};
    }
    return {success: false, error: "Validation error"};
  }
}
