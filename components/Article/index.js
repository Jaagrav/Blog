export default function Article() {
  return (
    <div className="bg-black/50 p-2 rounded-[25px] grid grid-cols-[30%_70%] mb-6 relative z-10">
      <div
        style={{
          backgroundImage:
            "url(./assets/blogs-media/raycast-vehicle-engine/thumbnail.png)",
        }}
        className="rounded-[20px] h-full w-full bg-center bg-no-repeat bg-cover"
      ></div>
      <div className="p-4 mt-2 max-w-full flex justify-center flex-col">
        <div className="text-white text-3xl truncate">
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
