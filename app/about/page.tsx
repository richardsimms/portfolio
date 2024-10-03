import Image from "next/image";
import { Metadata } from "next";

import Link from "@/app/components/Link";
import Section from "@/app/components/Section";
import ConnectLinks from "@/app/components/ConnectLinks";
import Workplaces from "@/app/about/components/Workplaces";
import Gallery from "@/app/about/components/Gallery";

import seekLogo from "public/work/seek.svg";
import ouaLogo from "public/work/oua.svg";
import arqLogo from "public/work/arq.svg";
import sapientLogo from "public/work/sapient.svg";

import portrait from "public/gallery/portrait.jpg";
import meGareth from "public/gallery/rich-gareth.jpeg";

export const metadata: Metadata = {
  title: "About | Richard Simms",
  description:
    "A UK-born designer who has been crafting digital products and experiences since 2005, is now an Australian citizen based in Melbourne and serves as a principal product designer at SEEK",
};

export default function About() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div>
        <h1 className="animate-in text-3xl font-bold tracking-tight text-primary">
          About
        </h1>
        <p
          className="animate-in text-secondary"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          A glimpse into me.
        </p>
      </div>
      <div className="mb-8 md:hidden">
        <div
          className="animate-in"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          <Image
            src={meGareth}
            alt={"me and Gareth"}
            width={324}
            height={139}
            className="pointer-events-none relative inset-0 h-50 -rotate-6 rounded-xl bg-gray-400 object-cover shadow-md"
            priority

          />
        </div>

        <div
          className="animate-in"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <Image
            src={portrait}
            alt={"me"}
            width={220}
            height={260}
            className="pointer-events-none absolute inset-0 -top-48 left-[45%] w-48 rotate-6 rounded-xl bg-gray-400 object-cover shadow-md md:left-[60%] md:w-56"
            priority

          />
        </div>
      </div>
      <div className="hidden md:block">
        <Gallery />
      </div>
      <div
        className="flex animate-in flex-col gap-16 md:gap-24"
        style={{ "--index": 3 } as React.CSSProperties}
      >
        <Section heading="About" headingAlignment="left">
          <div className="flex flex-col gap-6">
            <p>
            Hello, I&#39;m Richard Simms—a Melbourne-based Principal Product Designer with  {new Date().getFullYear() - 2005} years of experience crafting impactful digital products and experiences. Originally from the UK, I am passionate about finding clarity through continuous discovery.
            </p>
            <p>
              Currently, I&#39;m empowering job seekers to make great{" "}
              <Link
                className="underline font-bold"
                href="https://www.seek.com.au/career-advice/"
              >
                career decisions
              </Link>{" "}
              at{" "}
              <Link
                className="underline font-bold"
                href="https://www.seek.com.au/"
              >
                SEEK
              </Link>{" "}
              . Before that, I led the design practice at{" "}
              <Link
                className="underline font-bold"
                href="https://www.open.edu.au/"
              >
                Open Universities Australia
              </Link>{" "}
              , designed native mobile apps for {" "}
              <Link
                className="underline font-bold"
                href="https://www.open.edu.au/"
              >
                Suncorp Bank
              </Link>{" "}, and headed experience design at a leading London creative agency.
            </p>
            <p>
              When I&#39;m not designing, you&#39;ll find me spending time with my family, cycling around Melbourne, or enjoying a coffee at a local café.
            </p>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="88"
                height="24"
                viewBox="0 0 245 68"
                version="1.2"
              >            
                <path
                  d="M218.868 40.1463C216.831 38.2186 214.455 36.1233 207.412 37.7157C200.368 39.3082 192.137 46.9352 189.846 54.0594C189.664 54.6237 189.516 55.1721 189.4 55.7042C186.312 58.4911 183.626 59.9799 182.106 59.1011C180.78 57.0344 181.519 56.1002 185.594 50.9463L185.595 50.9453C186.477 49.829 187.516 48.5147 188.725 46.9481C195.3 38.4237 190.846 34.1246 184.057 33.957C178.626 33.8229 171.357 39.9916 168.274 43.1765C172.602 32.6998 163.701 34.9627 162.503 38.9858C162.43 39.231 162.301 39.716 162.124 40.3802L162.122 40.3853L162.122 40.3862L162.122 40.3864L162.122 40.387C161.307 43.444 159.484 50.2779 157.489 55.0046C156.424 57.5273 155.522 58.0531 154.721 58.5202C154.58 58.6023 154.443 58.6826 154.308 58.7716C153.827 58.9809 153.386 59.1028 153.017 59.0016C149.962 58.1634 154.969 47.2676 157.939 42.3225C158.702 37.5452 152.762 37.629 150.301 39.5567C148.265 37.629 145.889 35.5336 138.845 37.1261C132.839 38.4842 125.968 44.231 122.655 50.3121L122.612 50.3556C116.417 56.6416 111.835 61.1147 109.883 58.5428C108.658 56.9287 111.596 53.2991 114.446 49.7782C116.137 47.6892 117.797 45.6384 118.539 44.0695C119.727 41.5551 121.424 35.6354 114.55 34.0957C109.3 32.9197 104.126 36.8107 99.5057 40.2854C98.9687 40.6892 98.4392 41.0874 97.9179 41.4713C100.134 36.4501 103.974 29.6928 107.65 23.2248L107.65 23.2247L107.65 23.2245L107.651 23.2238C111.153 17.0606 114.506 11.1603 116.163 7.27526C119.557 -0.687043 110.647 -0.938485 107.592 5.85043C106.501 8.2744 103.149 15.1219 99.1319 23.3295C94.7306 32.3213 89.5303 42.9454 85.6285 51.1738C84.0858 51.6416 81.9587 53.0918 79.7831 54.5751C77.0294 56.4525 74.198 58.3829 72.3756 58.441C67.1144 58.6086 68.557 52.5741 72.0362 47.8805C75.2608 44.3603 77.9868 44.1089 80.0129 44.1089C83.2063 44.1089 84.2482 36.4342 79.4961 36.9371C74.4045 38.362 66.1861 42.1336 62.4394 50.0121C61.5726 51.8349 60.7181 53.7541 60.1684 55.6372C57.305 58.217 54.288 59.575 53.5698 58.106C52.3326 55.2547 55.2628 49.4141 57.2586 45.436L57.2586 45.436L57.2586 45.4359L57.2587 45.4359L57.2587 45.4358C58.1375 43.684 58.8352 42.2934 58.9159 41.6784C59.5099 37.1525 52.9042 37.4495 51.3767 39.5449C49.3851 42.8467 47.2053 50.003 46.0602 54.3323C45.9879 54.3698 45.9063 54.4259 45.8146 54.5019C45.5866 54.6911 45.3612 54.8844 45.1346 55.0786C43.2532 56.6916 41.2909 58.374 37.0777 58.374C31.4339 58.374 28.507 50.8027 27.7433 47.3944C40.6418 45.6343 58.9713 35.7443 55.6618 19.4006C51.0794 1.46442 29.7799 6.32561 25.0278 8.08571C20.498 9.76342 6.22317 16.3833 2.54009 26.2733C-0.175386 33.5651 8.90451 35.0737 11.7048 27.8658C14.5052 20.6578 21.2091 16.2994 26.3855 14.1203C31.5619 11.9411 40.0478 13.1145 42.5087 15.4613C44.9696 17.8081 48.2791 23.3398 44.2059 31.2183C40.9473 37.5211 31.4487 40.9685 27.0644 41.7788C26.7636 41.1707 26.5225 40.2321 26.2578 39.2012C25.6256 36.7401 24.8584 33.7531 22.8214 33.4813C21.7748 33.3415 19.6477 33.7327 18.4936 35.7443C17.9028 36.774 15.1486 40.6011 11.9681 45.0207C7.38246 51.3929 1.9105 58.9966 0.758061 61.2236C-1.02397 69.2697 6.95275 66.5039 8.48021 64.66C9.15993 63.8394 15.6084 53.7642 16.9661 51.3336C17.1785 50.9533 17.4473 50.2937 17.6936 49.689L17.6936 49.6889C17.9281 49.1135 18.1422 48.5878 18.2683 48.4001C18.421 48.1728 20.1265 47.9774 20.1908 48.4001C21.2091 55.1052 23.076 63.2352 30.6285 65.5819C36.48 67.4002 42.3793 63.7049 44.8267 61.4399C45.1081 64.8871 47.3259 66.655 50.0057 66.655C53.0778 66.655 57.1082 63.7993 58.9998 62.4591C59.1992 62.3178 59.3749 62.1933 59.5231 62.0908C59.6301 62.0168 59.7506 61.8629 59.8804 61.645C60.338 63.1403 61.3243 64.4814 63.0625 65.567C68.2125 68.7835 76.6513 64.35 81.9863 59.01C81.2365 60.6757 80.6482 62.0389 80.2674 63.0114C80.2674 68.1241 85.6983 66.8669 86.8863 64.8553C87.0908 64.5091 87.4236 63.9194 87.8495 63.1646L87.8512 63.1616L87.8514 63.1613C89.9005 59.53 94.1022 52.0839 96.5602 49.5174C99.5303 46.4163 107.592 40.4656 109.883 42.3095C111.14 43.3209 109.537 45.1896 107.329 47.7636C105.512 49.8823 103.286 52.4788 101.906 55.4682C98.8514 62.0895 101.567 65.9449 106.743 66.6154C110.884 67.1518 117.633 62.1733 120.49 59.4913L120.557 59.3669C120.97 63.1039 123.235 65.4653 125.862 66.0419C129.681 66.8801 137.488 64.7009 144.361 56.8224C142.749 60.594 144.87 66.2934 149.029 66.6286C152.762 66.9297 156.839 64.5948 158.614 62.2339C159.725 60.9172 161.794 57.8497 164.362 53.1607C167.163 48.0481 177.608 40.6621 180.748 42.2545C182.549 43.1678 181.833 44.0759 179.905 46.521C178.471 48.3395 176.367 51.0084 174.129 55.1619C169.207 64.2976 175.487 67.4825 181.003 66.4767C184.308 65.874 187.339 63.8809 189.566 61.9869C190.435 64.5483 192.315 66.1676 194.428 66.6314C198.247 67.4696 206.054 65.2904 212.927 57.4119C211.315 61.1836 213.437 66.8829 217.595 67.2181C221.753 67.5534 226.335 64.6199 227.693 62.0217C228.447 60.5789 227.922 58.4428 226.335 58.1663C225.513 58.0229 224.59 58.4987 223.724 58.9449L223.723 58.9453C222.918 59.3603 222.162 59.7498 221.583 59.5911C218.528 58.753 223.535 47.8572 226.505 42.9122C226.605 42.2884 227.657 40.1795 229.528 36.4307L229.528 36.429C232.543 30.3877 237.683 20.0883 244.385 4.88422C245.148 1.78311 242.093 -1.90469 236.238 3.5432C234.441 5.85643 228.028 20.0969 223.515 30.118L223.513 30.1219L223.513 30.1229L223.512 30.1246C220.995 35.713 219.07 39.9876 218.868 40.1463ZM213.521 48.1924C210.976 52.0757 205.12 59.5911 200.368 59.0044C195.616 58.1579 198.586 52.1317 200.368 49.282C202.15 46.4323 208.854 41.1521 213.521 48.1924ZM70.5936 26.1078C68.7795 29.1025 64.6071 34.8979 61.2209 34.4454C57.8346 33.7928 59.951 29.1455 61.2209 26.948C62.4907 24.7505 67.2678 20.6786 70.5936 26.1078ZM144.955 47.6028C142.41 51.4862 136.554 59.0016 131.802 58.4149C127.05 57.5683 130.02 51.5421 131.802 48.6924C133.584 45.8427 140.288 40.5625 144.955 47.6028ZM236.747 66.655C239.091 66.655 240.99 64.7787 240.99 62.4643C240.99 60.1498 239.091 58.2736 236.747 58.2736C234.404 58.2736 232.504 60.1498 232.504 62.4643C232.504 64.7787 234.404 66.655 236.747 66.655Z" 
                  fill="currentColor"
                />
          </svg>
          </div>
        </Section>
        <Section heading="Connect" headingAlignment="left">
          <ul className="animated-list grid flex-grow grid-cols-1 gap-3 md:grid-cols-2">
            {ConnectLinks.map((link) => (
              <li className="col-span-1 transition-opacity" key={link.label}>
                <Link
                  href={link.href}
                  className="inline-grid w-full rounded-lg bg-secondary p-4 no-underline transition-opacity "
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{link.icon}</span>
                    {link.label}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="ml-auto h-5 w-5 text-secondary"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
        <Section heading="Work" headingAlignment="left">
          <div className="flex w-full flex-col gap-8">
            <p>
            I specialise in product design, UX/UI, digital experiences, and design leadership. Passionate about finding clarity through continuous discovery, I&#39;m always learning new things. Here are some of the places I&#39;ve worked.
            </p>
            <Workplaces items={workplaces} />
          </div>
        </Section>
      </div>
    </div>
  );
}

const workplaces = [
  {
    title: "Principal Product Designer",
    company: "SEEK",
    date: "2021 -",
    imageSrc: seekLogo,
    link: "https://seek.com.au",
  },
  {
    title: "Lead Experience Designer",
    company: "Open Universities Australia",
    date: "2019 - 2021",
    imageSrc: ouaLogo,
    link: "https://www.open.edu.au",
  },
  {
    title: "Lead Experience Designer",
    company: "Outware Mobile﻿",
    date: "2017 - 2019",
    imageSrc: arqLogo,
    link: "https://x.com/outware",
  },
  {
    title: "Senior Experience Designer",
    company: "SapientRazorfish",
    date: "2015 - 2017",
    imageSrc: sapientLogo,
    link: "https://www.publicissapient.com",
  },
];
