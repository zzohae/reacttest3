import React, { useState, useRef, useEffect } from "react";
import Movetool from '../../ui/Mtitle';
import Searchbox from '../../ui/Searchbox';
import Storelist from '../../ui/Storelist';
import storeDB from '../../db/storeData.json';

export default function StoreInfo() {
  // 검색 키워드와 탭 필터링 상태 관리
  const [searchKeyword, setSearchKeyword] = useState("");
  const [activeTab, setActiveTab] = useState("전체");

  // 스토어 리스트 항목 참조
  const storeRefs = useRef({});

  // 검색 기능 - 검색 키워드에 맞는 항목으로 스크롤 이동
  useEffect(() => {
    if (searchKeyword && storeRefs.current[searchKeyword]) {
      storeRefs.current[searchKeyword].scrollIntoView({ behavior: "smooth" });
    }
  }, [searchKeyword]);

  // 탭 필터링 기능
  const filteredStores = storeDB.filter((store) =>
    activeTab === "전체" ? true : store.category === activeTab
  );

  return (
    <div className='container storeinfo' style={{ paddingBottom: '150px' }}>
      <Movetool textColor='#214aee' h2size='34px'>매장 소개</Movetool>

      <div className="row w-100 mt-3">
        <div className="col-5 pt-3">
          <Searchbox className='order-0 order-lg-1 mb-2'
            onChange={(e) => setSearchKeyword(e.target.value)}/>

          <div className="mytab" style={{borderBottom:'0', paddingBottom:'0'}}>
            <ul className="tabs mt-2 mb-3 d-flex list-unstyled">
              <li className={`me-2 px-3 py-2 ${activeTab === "전체" ? "active" : ""}`} onClick={() => setActiveTab("전체")} style={{ cursor: "pointer" }}>전체</li>
              <li className={`me-2 px-3 py-2 ${activeTab === "농산물" ? "active" : ""}`} onClick={() => setActiveTab("농산물")} style={{ cursor: "pointer" }}>농산물</li>
              <li className={`me-2 px-3 py-2 ${activeTab === "수산물" ? "active" : ""}`} onClick={() => setActiveTab("수산물")} style={{ cursor: "pointer" }}>수산물</li>
              <li className={`me-2 px-3 py-2 ${activeTab === "육류" ? "active" : ""}`} onClick={() => setActiveTab("육류")} style={{ cursor: "pointer" }}>육류</li>
              <li className={`px-3 py-2 ${activeTab === "기타" ? "active" : ""}`} onClick={() => setActiveTab("기타")} style={{ cursor: "pointer" }}>기타</li>
            </ul>
          </div>

          <div
            style={{
              height: '500px',
              overflowY: 'auto',
              paddingRight: '0.8rem',
              scrollbarGutter: 'stable',
            }}>
            <Storelist stores={filteredStores} />
          </div>
        </div>

        <div className="col-8">
          <div className="w-100 h-100"></div>
        </div>
      </div>
    </div>
  );
}
