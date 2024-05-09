import Attribution from "@/components/Attribution/Attribution";
import Card from "@/components/Card/Card";

const Home: React.FC = () => {
  return (
    <main className="flex min-h-screen h-screen flex-col items-center justify-center bg-[#F4D04E] p-3">
      <Card
        image="assets/images/illustration-article.svg"
        creatorName="Greg Hooper"
        creatorPicture="/assets/images/image-avatar.webp"
        title="HTML & CSS foundations"
        description="These languages are the backbone of every website, defining structure, content, and presentation."
        date="Published 21 Dec 2023"
      />
      <Attribution />
    </main>
  );
};

export default Home;
