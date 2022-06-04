export default function FeaturedArticle() {
  return (
    <div className="bg-black/50 p-2 rounded-[30px]">
      <div
        style={{
          backgroundImage:
            "url(./assets/blogs-media/raycast-vehicle-engine/thumbnail.png)",
        }}
        className="rounded-[20px] h-96 w-full bg-center bg-no-repeat bg-cover"
      ></div>
      <div className="p-4 mt-2">
        <div className="text-white text-4xl">
          Drive a Tesla Cybertruck or literally any car on your browser with
          Threejs
        </div>
        <div className="text-xl opacity-50 text-white mt-2">
          February 23, 2022 • 10 min read
        </div>
      </div>
    </div>
  );
}
