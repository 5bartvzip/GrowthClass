import React, { useState } from 'react';
import { CURRICULUM_DATA } from '../constants';
import { ChevronDown, ChevronUp, Download, BookOpen, Monitor } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Curriculum: React.FC = () => {
  const [openWeek, setOpenWeek] = useState<number | null>(1);
  const navigate = useNavigate();

  const toggleWeek = (week: number) => {
    setOpenWeek(openWeek === week ? null : week);
  };

  return (
    <div className="bg-bgMain min-h-screen pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl mb-4">
            상세 커리큘럼
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            기초부터 실무 프로젝트까지, 4주 동안 꽉 채운 성장 로드맵을 확인하세요.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Intro Card */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center">
            <div className="bg-white p-3 rounded-full shadow-sm text-primary mr-4">
              <Download size={24} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">전체 강의안 미리보기</h3>
              <p className="text-sm text-gray-600">PDF 파일로 상세 내용을 다운로드 하세요.</p>
            </div>
          </div>
          <button className="px-5 py-2.5 bg-white text-primary font-semibold border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors shadow-sm text-sm">
            PDF 다운로드
          </button>
        </div>

        {/* Accordion */}
        <div className="space-y-6">
          {CURRICULUM_DATA.map((item) => {
            const isOpen = openWeek === item.week;
            return (
              <div 
                key={item.week} 
                className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 border ${isOpen ? 'border-primary shadow-lg ring-2 ring-primary/10' : 'border-gray-200 shadow-sm hover:border-blue-300'}`}
              >
                <button
                  onClick={() => toggleWeek(item.week)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-6">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-bold ${isOpen ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'}`}>
                      {item.week}주
                    </div>
                    <div>
                      <h3 className={`text-xl md:text-2xl font-bold mb-1 ${isOpen ? 'text-primary' : 'text-gray-900'}`}>
                        {item.title}
                      </h3>
                      <div className="flex items-center text-sm text-gray-500 gap-3">
                         <span className="flex items-center">
                           {item.isOffline ? <BookOpen size={14} className="mr-1"/> : <Monitor size={14} className="mr-1"/>}
                           {item.isOffline ? '오프라인 실습' : '온라인 라이브'}
                         </span>
                         <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                         <span>난이도: {item.week > 2 ? '중급' : '초급'}</span>
                      </div>
                    </div>
                  </div>
                  <div className={`p-2 rounded-full transition-transform duration-300 ${isOpen ? 'rotate-180 bg-blue-50 text-primary' : 'text-gray-400'}`}>
                    <ChevronDown size={24} />
                  </div>
                </button>

                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-6 md:p-8 pt-0 border-t border-gray-100 bg-gray-50/50">
                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                      {item.description}
                    </p>
                    <div className="space-y-3">
                      <h4 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wide">학습 상세 내용</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {item.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start p-3 bg-white rounded-lg border border-gray-100 shadow-sm">
                            <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-secondary mt-2 mr-3"></span>
                            <span className="text-gray-600 text-sm md:text-base">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 text-lg">이 모든 과정을 마스터하면, 당신은 대체 불가능한 인재가 됩니다.</p>
          <button 
            onClick={() => navigate('/apply')}
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-primary hover:bg-primaryHover shadow-xl transition-all hover:-translate-y-1"
          >
            수강 신청하러 가기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
