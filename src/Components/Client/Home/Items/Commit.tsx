import React from "react";
import CommitCard from "./CommitCard";

const Commit = ({ topic, Data }: any) => {
  return (
    <>
      <div className="p:w-auto d:w-[1200px] mx-auto font-LexendDeca font-light cursor-pointer">
        <h1 className="text-center text-[52px] font-bold pt-2 pb-6 border-b-2 border-dashed text-[#553aaf]">
          {topic}
        </h1>
        <div className="grid p:grid-cols-2 d:grid-cols-4 gap-5 py-8">
          {Data.map((item: any, idx: number) => (
            <div key={idx}>
              <CommitCard
                Image={item.image}
                title={item.title}
                content={item.content}
                topic={topic}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Commit;
