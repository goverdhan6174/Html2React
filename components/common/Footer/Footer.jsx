import cn from "classnames";
import Link from "next/link";
import { Logo, Container, Text } from "@components/ui";
import s from "./Footer.module.css";
import ShareIcons from "../ShareIcons";
import Searchbar from "../Searchbar";

const links = [
  { name: "Company", links: ["About", "Contact", "Career"] },
  { name: "Product & Services", links: ["Products", "Business", "Developer"] },
  {
    name: "Help & Suuport",
    links: ["Support Center", "FAQ", "Terms & Conditions"],
  },
];

const Footer = ({ className }) => {
  const rootClassName = cn(s.root, className);

  return (
    <footer className={rootClassName}>
      <Container>
        <div className="col-span-1 lg:col-span-2">
          <Link href="/">
            <a className="flex flex-initial items-center font-bold md:mr-24">
              <Logo className="mr-8" />
              <ShareIcons size={2} />
            </a>
          </Link>
        </div>
        <div className="grid grid-cols-5 justify-start">
          {links.map((link) => {
            return (
              <div className="flex flex-col gap-4 my-8">
                <Text variant="subText" className="text-accent-5">
                  {link.name}
                </Text>
                {link.links.map((link) => {
                  return (
                    <Link href="#">
                      <a>{link}</a>
                    </Link>
                  );
                })}
              </div>
            );
          })}
          <div className="flex flex-col col-span-2 gap-4 my-8">
            <Text variant="subText" className="text-accent-5">
              Subscribe Newsletter
            </Text>
            <Searchbar className="w-4/5" />
            <Text>
              Subscribe weekly newsletter to stay upto date. We don’t send spam.
            </Text>
          </div>
        </div>
      </Container>
      <div className={s.bottom}>
        <Text className="text-white">
          Template Crafted by <span className="text-blue">UIdeck</span> - UI
          Powered by <span className="text-blue">AyroUI</span>
        </Text>
      </div>
    </footer>
  );
};

export default Footer;
