import React from "react";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Kyungbokgung Palace",
    description:
      "The Gyeongbokgung Palace is a royal palace located in northern Seoul, South Korea. First constructed in 1395, later burned and abandoned for almost three centuries, and then reconstructed in 1867, it was the main and largest palace of the Five Grand Palaces built by the Joseon dynasty.",
    imageUrl:
      "https://lh5.googleusercontent.com/p/AF1QipPGl6MqUOpA-oR3QcdGBgaWh67smtnDY1s05ps4=w408-h272-k-no",
    address: "161 Sajik-ro, Sejongno, Jongno-gu, Seoul, South Korea",
    location: {
      lat: 37.579617,
      lng: 126.977041,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Gwanghwamun Gate",
    description:
      "Gwanghwamun Gate is the main gate of Gyeongbokgung Palace, in Jongno-gu, Seoul, South Korea. It is located at a three-way intersection at the northern end of Sejongno. As a landmark and symbol of Seoul's long history as the capital city during the Joseon Dynasty, the gate has gone through multiple periods of destruction and disrepair.",
    imageUrl:
      "https://lh3.googleusercontent.com/gps-proxy/AE4_-5Fnoih1gKfHDdLBw064YmimUz3ClbFt0YqYj9xoxFW_JBRZid31ZOu53txnZgQbyIl79LKn5IHTRrWi76P_WvpoFsizEvENJQ2xiKorhjyNREzz7JxiFqy_ezSQ7DwtS72TIkb-9tgf0JXJ3xdO-xyI9eGpA15VVgGexrfwbBJRPh97u3TVxwJ2cQ=w408-h260-k-no",
    address: "서울특별시 종로구 효자로 12",
    location: {
      lat: 37.2985109,
      lng: 126.9735458,
    },
    creator: "u2",
  },
];

function UserPlaces() {
  return <PlaceList items={DUMMY_PLACES} />;
}

export default UserPlaces;
