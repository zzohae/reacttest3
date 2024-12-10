import React, { useEffect, useState } from 'react';
import { supabase } from '../../api/dbconnect';
import { Link } from 'react-router-dom';
import Movetool from '../../ui/Mtitle'

export default function Notice() {
  const [notices, setNotices] = useState([]);
  const [activeNotices, setActiveNotices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const noticesPerPage = 5;

  useEffect(() => {
    const fetchNotices = async () => {
      // 총 개수
      const { count, error: countError } = await supabase
        .from('notices')
        .select('*', { count: 'exact', head: true });

      if (countError) {
        console.error('Error fetching count:', countError);
      } else {
        setTotalCount(count);
      }

      // 상단노출공지
      const { data: activeData, error: activeError } = await supabase
        .from('notices')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false });
        // SELECT * FROM notices WHERE is_active = TRUE ORDER BY created_at DESC;

      if (activeError) {
        console.error('Error fetching active notices:', activeError);
      } else {
        setActiveNotices(activeData);
      }

      // 모든공지
      const { data, error } = await supabase
        .from('notices')
        .select('*')
        .order('created_at', { ascending: false })
        .range((currentPage - 1) * noticesPerPage, currentPage * noticesPerPage - 1);

      if (error) {
        console.error('Error fetching notices:', error);
      } else {
        setNotices(data);
      }
    };

    fetchNotices();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(totalCount / noticesPerPage);

  return (
    <div>
      <Movetool textColor='#214aee'>공지사항</Movetool>
      <div className='mt50'>
      <p className='totalQuan'>총 {totalCount}개</p>
      <ul className='noticelist d-flex flex-column'>
        <li className='noticeitem noticeHd'>
            <p className='postNum'>글번호</p>
            <span className='invisible'>공지</span>
            <h3 className='text-center'>제목</h3>
            <p className='createdAt'>작성일</p>
            <p className='view'>조회수</p>
        </li>
        {/* 상단노출공지 */}
        {activeNotices.map((notice) => (
          <li key={notice.id} className={`noticeitem active`}>
            <p className='postNum invisible'>공지</p>
            <span>공지</span>
            <h3><Link>{notice.title}</Link></h3>
            <p className='createdAt'>{new Date(notice.created_at).toLocaleDateString()}</p>
            <p className='view'>조회수</p>
          </li>
        ))}

        {/* 모든공지 */}
        {notices.map((notice, index) => (
          <li key={notice.id} className={`noticeitem ${notice.is_active ? 'active' : ''}`}>
            <p className='postNum'>{totalCount - (currentPage - 1) * noticesPerPage - index }</p>
            <span>공지</span>
            <h3 className='normalTitle'><Link>{notice.title}</Link></h3>
            <p className='createdAt'>{new Date(notice.created_at).toLocaleDateString()}</p>
            <p className='view'>조회수</p>
          </li>
        ))}
      </ul>
      </div>

      {/* Pagination */}
      <div className='d-flex justify-content-center align-items-center myPagination'>
        <button
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        >맨 처음
        </button>

        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M15 8H1" stroke="#214AEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 15L1 8L8 1" stroke="#214AEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >{index + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M1 8H15" stroke="#214AEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 1L15 8L8 15" stroke="#214AEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <button
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
        >맨 끝
        </button>
      </div>
    </div>
  );
}