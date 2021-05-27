import React from "react";
import TitlePage from "~/components/Elements/TitlePage";
import { Card } from "antd";
import SearchBox from "~/components/Elements/SearchBox";
import SortBox from "~/components/Elements/SortBox";
import { table } from "console";
import Link from "next/link";

const PackageStore = () => {
  return (
    <>
      <div className="row package-set">
        <div className="col-12">
          <TitlePage title="My Set" />
          <Card
            title="Các gói bài tập"
            extra={
              <div className="extra-table">
                <SortBox />
                <SortBox space={true} />
                <SearchBox />
              </div>
            }
          >
            <div className="wrap-set">
              <div className="wrap-set-content">
                <h6 className="set-title">IELTS Practice Test 1</h6>
                <ul className="set-list">
                  <li className="price">
                    Price: <span>2,200,000 VNĐ</span>
                  </li>
                  <li className="status">
                    Status: <span>Free</span>
                  </li>
                </ul>
                <p className="set-des">IELTS Practice Test 6</p>
                <div className="set-btn">
                  <Link
                    href={{
                      pathname: "/package/package-set/type/[slug]",
                      query: { slug: 2 },
                    }}
                  >
                    <a className="btn btn-warning">Start test</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="wrap-set">
              <div className="tag-free">Free Set</div>
              <div className="wrap-set-content">
                <h6 className="set-title">IELTS Practice Test 1</h6>
                <ul className="set-list">
                  <li className="price">
                    Price: <span>2,200,000 VNĐ</span>
                  </li>
                  <li className="status">
                    Status: <span>Free</span>
                  </li>
                </ul>
                <p className="set-des">IELTS Practice Test 6</p>
                <div className="set-btn">
                  <Link
                    href={{
                      pathname: "/package/package-set/type/[slug]",
                      query: { slug: 2 },
                    }}
                  >
                    <a className="btn btn-warning">Start test</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="wrap-set">
              <div className="wrap-set-content">
                <h6 className="set-title">IELTS Practice Test 1</h6>
                <ul className="set-list">
                  <li className="price">
                    Price: <span>2,200,000 VNĐ</span>
                  </li>
                  <li className="status">
                    Status: <span>Free</span>
                  </li>
                </ul>
                <p className="set-des">IELTS Practice Test 6</p>
                <div className="set-btn">
                  <Link
                    href={{
                      pathname: "/package/package-set/type/[slug]",
                      query: { slug: 2 },
                    }}
                  >
                    <a className="btn btn-warning">Start test</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="wrap-set">
              <div className="tag-free">Free Set</div>
              <div className="wrap-set-content">
                <h6 className="set-title">IELTS Practice Test 1</h6>
                <ul className="set-list">
                  <li className="price">
                    Price: <span>2,200,000 VNĐ</span>
                  </li>
                  <li className="status">
                    Status: <span>Free</span>
                  </li>
                </ul>
                <p className="set-des">IELTS Practice Test 6</p>
                <div className="set-btn">
                  <Link
                    href={{
                      pathname: "/package/package-set/type/[slug]",
                      query: { slug: 2 },
                    }}
                  >
                    <a className="btn btn-warning">Start test</a>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default PackageStore;