import Link from "next/link";
import s from "./Navbar.module.css";
import NavbarRoot from "./NavbarRoot";
import { Logo, Container, Text } from "@components/ui";
import ShareIcons from "../ShareIcons";

const navigation = [
  { name: "home", href: "#home", current: true },
  { name: "services", href: "#services", current: false },
  { name: "pricing", href: "#pricing", current: false },
  { name: "testimonial", href: "#testimonial", current: false },
  { name: "contact", href: "#contact", current: false },
];

const Navbar = () => (
  <NavbarRoot>
    <Container>
      <nav className={s.nav}>
        <div className={s.contain}>
          <section className={s.logo}>
            <Logo />
          </section>
          <section>
            <ul className={s.links}>
              {navigation.map((nav) => {
                return (
                  <li className="relative group" key={nav.name}>
                    <Link href={nav.href}>
                      <a className={s.link}>
                        <Text variant="button">{nav.name.toUpperCase()}</Text>
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
          <section>
            <div className={s.socials}>
              <Text variant="button"> FOLLOW US </Text>
              <ShareIcons />
            </div>
          </section>
        </div>
      </nav>
    </Container>
  </NavbarRoot>
);

export default Navbar;
