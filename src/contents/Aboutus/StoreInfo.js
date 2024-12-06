import React, { useState, useRef, useEffect } from "react";
import Movetool from '../../ui/Mtitle';
import Searchbox from '../../ui/Searchbox';
import Storelist from '../../ui/Storelist';
import storeDB from '../../db/storeData.json';
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export default function StoreInfo() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const storeRefs = useRef({});

  // 검색 기능
  useEffect(() => {
    if (searchKeyword) {
      const targetStore = storeDB.find((store) =>
        store.title.toLowerCase().includes(searchKeyword.toLowerCase())
      );
      if (targetStore && storeRefs.current[targetStore.title]) {
        storeRefs.current[targetStore.title].scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  }, [searchKeyword]);

  // 탭 필터링
  const filteredStores = storeDB.filter((store) =>
    activeTab === "all" ? true : store.category === activeTab
  );

  const searchedStores = filteredStores.filter((store) => {
    const titleLower = store.title.toLowerCase();
    const keywordLower = searchKeyword.toLowerCase();

    return (
      searchKeyword === "" || 
      titleLower.includes(keywordLower) || 
      titleLower.split('').some((_, idx) =>
        titleLower.slice(idx).startsWith(keywordLower)
      )
    );
  });

  const containerStyle = {
    width: '100%',
    height: '100%'
  };

  const center = {
    lat: 37.581127,
    lng: 127.043834
  };

  return (
    <div className='container storeinfo' style={{ paddingBottom: '150px' }}>
      <Movetool textColor='#214aee' h2size='34px'>매장 소개</Movetool>

      <div className="row w-100 mt-3">
        <div className="col-5 pt-3">
          {/* Searchbox에 keyword와 setKeyword 전달 */}
          <Searchbox
            keyword={searchKeyword} // 현재 검색 상태 전달
            setKeyword={setSearchKeyword} // 검색 상태 변경 함수 전달
            className='order-0 order-lg-1 mb-2'
          />

          <div className="mytab" style={{ borderBottom: '0', padding: '0', marginBottom: '0' }}>
            <ul className="mt-2 mb-4 d-flex list-unstyled">
              <li className={`me-2 px-3 py-2 ${activeTab === "all" ? "active" : ""}`}
                onClick={() => setActiveTab("all")} style={{ cursor: "pointer" }}>전체</li>
              <li className={`me-2 px-3 py-2 ${activeTab === "produce" ? "active" : ""}`}
                onClick={() => setActiveTab("produce")} style={{ cursor: "pointer" }}>농산물</li>
              <li className={`me-2 px-3 py-2 ${activeTab === "seafood" ? "active" : ""}`}
                onClick={() => setActiveTab("seafood")} style={{ cursor: "pointer" }}>수산물</li>
              <li className={`me-2 px-3 py-2 ${activeTab === "meat" ? "active" : ""}`}
                onClick={() => setActiveTab("meat")} style={{ cursor: "pointer" }}>육류</li>
              <li className={`px-3 py-2 ${activeTab === "another" ? "active" : ""}`}
                onClick={() => setActiveTab("another")} style={{ cursor: "pointer" }}>기타</li>
            </ul>
          </div>

          <div style={{
              height: '500px',
              overflowY: 'auto',
              paddingRight: '0.8rem',
              scrollbarGutter: 'stable',
            }}><Storelist stores={searchedStores} />
          </div>
        </div>

        <div className="col-7" style={{padding:'0', borderRadius:'10px'}}>
          <LoadScript googleMapsApiKey="AIzaSyBiLqGmZSvt7NDv5m0C01sMrCNB12qCzQI">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={18}>
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </div>
  );
}
