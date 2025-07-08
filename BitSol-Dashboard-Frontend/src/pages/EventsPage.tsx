import Post from "../components/Feed/Post";
import post from "../assets/post.png";
import companyLogo from "../assets/company.png";

const posts = [
  {
    accName: "Biffco Enterprises Ltd.",
    timePassed: "16h.",
    text: "In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in wh",
    accSrc: companyLogo,
    imgSrc: post,
  },
];

export default function EventsPage() {
  return (
    <>
      {posts.map((post, index) => (
        <Post {...post} key={index} />
      ))}
    </>
  );
}
