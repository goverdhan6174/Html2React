import s from "./Contact.module.css";
import { Text } from "@components/ui";
import { Searchbar } from "@components/common";

function Contact() {
  return (
    <div className={s.container}>
      <div className={s.first}>
        <img src="/images/call-to-action.png" alt="call to action" />
      </div>
      <div className={s.second}>
        <Text variant="heading">Curious to Learn More? Stay Tuned</Text>
        <Text variant="pageSubHeading">
          You let us know whenever you want us to update anything or think
          something can be optimised.
        </Text>
        <Searchbar className="w-4/5 mx-auto" />
      </div>
    </div>
  );
}

export default Contact;
