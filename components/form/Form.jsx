import { Text, Button } from "@components/ui";
import s from "./Form.module.css";

// @TODO convert Input into its own components
function Form() {
  return (
    <section id="contact" className={s.container}>
      <Text variant="pageHeading">Get In touch</Text>
      <Text variant="pageSubHeading" className="text-accent-5">
        Stop wasting time and money designing and managing a website that
        doesn’t get results. Happiness guaranteed!
      </Text>

      <form action="#" className={s.form}>
        <input
          type="text"
          name="email-address"
          id="email-address"
          autoComplete="email"
          className="mt-1 border p-4 w-full sm:text-sm border-gray-400 rounded-md"
          placeholder="placeholder..."
        />
        <input
          type="text"
          name="first-name"
          id="first-name"
          autoComplete="given-name"
          className="mt-1 border p-4 w-full sm:text-sm border-gray-400 rounded-md"
          placeholder="placeholder..."
        />
        <input
          type="text"
          name="last-name"
          id="last-name"
          autoComplete="family-name"
          className="mt-1 border p-4 w-full sm:text-sm border-gray-400 rounded-md"
          placeholder="placeholder..."
        />
        <input
          type="textarea"
          name="last-name"
          id="last-name"
          autoComplete="family-name"
          className="mt-1 border p-4 w-full sm:text-sm border-gray-400 rounded-md"
          placeholder="placeholder..."
        />

        <input
          type="textarea"
          name="last-name"
          id="last-name"
          autoComplete="family-name"
          className="mt-1 border p-4 w-full sm:text-sm border-gray-400 rounded-md col-span-2"
          placeholder="placeholder..."
        />

        <div className={s.buttonContainer}>
          <Button type="submit"> SEND MESSAGE </Button>
        </div>
      </form>
    </section>
  );
}

export default Form;
