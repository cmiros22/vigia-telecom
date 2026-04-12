import React, { useState } from "react";
import { humanize } from "@/lib/utils/textConverter";
import { marked } from "marked";
import { AiOutlineArrowRight } from "react-icons/ai";

const IntegrateMedia = ({ integrations, categories }) => {
  const [tab, setTab] = useState("");
  const filterPost = !tab
    ? integrations
    : integrations.filter((post) => post.data?.categories?.includes(tab));
  return (
    <section className="section pt-0">
      <div className="container">
        <div className="row justify-center">
          <div className="lg:col-10">
            <ul className="integration-tab filter-list flex flex-wrap items-center justify-center pb-8 gap-y-10">
            <li>
                <span
                  className={`filter-btn text-bluePrimary-800 ${
                    !tab ? "filter-btn-active" : ""
                  }`}
                  onClick={() => setTab("")}
                >
                  Nuestra Identidad
                </span>
              </li>
              {/* {categories.map((category, i) => (
                <li key={`category-${i}`} onClick={() => setTab(category)}>
                  <span
                    className={`filter-btn ${
                      tab === category ? "filter-btn-active" : ""
                    }`}
                  >
                    {humanize(category)}
                  </span>
                </li>
              ))} */}
            </ul>
            <span className="text-center block text-xl font-extralight">Mas que un proveedor, somos el motor de tu conectividad</span>
          </div>
        </div>
        <div className="integration-tab-items row mt-10">
          {filterPost.map((item, i) => (
            <div
              key={i}
              className="integration-tab-item mb-8 md:col-6 lg:col-4"
            >
              <div className="rounded-xl bg-white mx-4 md:mx-2 px-10 pb-8 pt-11 border border-[#2a8f37] shadow-[0px_-10px_0px_#24712f] transition-transform duration-500 hover:scale-105">
                <div className="integration-card-head flex items-center space-x-4">
                  <img src={item.data?.image || "/images/placeholder.png"} alt="" className="w-12"/>
                  <div>
                    <h4 className="h4 text-xl">{humanize(item.data?.name || "Untitled")}</h4>
                    {item.data?.categories?.map((category, i) => (
                      <span className="font-medium text-sm" key={i}>
                        {humanize(category)}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="my-5 border-y border-border py-5">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: marked.parseInline(
                        (item.data?.excerpt || "").slice(0, 200),
                      ),
                    }}
                    className="text-sm"
                  />
                </div>

                {/* <a
                  className="group inline-flex items-center font-semibold text-pink hover:text-primary"
                  href={`/integrations/${item.slug}`}
                >
                  View integration
                  <AiOutlineArrowRight className="ml-1.5 text-xl font-bold duration-300 group-hover:ml-3" />
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrateMedia;
