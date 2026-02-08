import React from 'react';
import { INSTRUCTOR_DATA } from '../constants';
import { Linkedin, Mail, Award, Briefcase } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Instructor: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-bgMain min-h-screen">
      {/* Profile Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="relative group flex-shrink-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <img 
                src="https://loremflickr.com/800/800/portrait,teacher" 
                alt={INSTRUCTOR_DATA.name}
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white shadow-2xl"
              />
            </div>
            
            <div className="text-center md:text-left flex-1">
              <div className="inline-block px-3 py-1 bg-blue-100 text-primary rounded-full text-sm font-bold mb-4">
                GrowthClass 대표 강사
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
                {INSTRUCTOR_DATA.name}
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 font-medium mb-6">
                {INSTRUCTOR_DATA.role}
              </p>
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mb-8">
                {INSTRUCTOR_DATA.bio}
              </p>
              
              <div className="flex justify-center md:justify-start gap-4">
                <a href="#" className="p-3 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="p-3 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 flex items-center">
          <Briefcase className="mr-3 text-primary" />
          주요 경력
        </h2>
        
        <div className="relative border-l-2 border-gray-200 ml-4 space-y-12">
          {INSTRUCTOR_DATA.experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-12 group">
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-gray-300 group-hover:border-primary transition-colors"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 mb-2">
                <span className="text-lg font-bold text-primary w-32 flex-shrink-0">{exp.year}</span>
                <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg bg-white p-4 rounded-lg shadow-sm border border-gray-100 inline-block w-full">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Philosophy/Interview Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="w-12 h-12 text-secondary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-8">"데이터는 숫자가 아니라 언어입니다."</h2>
          <div className="text-lg md:text-xl text-gray-300 leading-loose italic font-light">
            "처음 데이터 분석을 시작했을 때 저도 막막했습니다.<br/>
            복잡한 도구나 수학적 지식보다 중요한 것은<br/>
            <span className="text-white font-semibold">비즈니스 문제를 정의하고 해결하려는 태도</span>입니다.<br/><br/>
            제 강의는 단순히 SQL 쿼리를 짜는 법을 가르치지 않습니다.<br/>
            데이터를 통해 비즈니스의 성장을 이끄는 <span className="text-secondary">진짜 실력</span>을 만들어 드립니다."
          </div>
          <div className="mt-12">
            <button 
              onClick={() => navigate('/apply')}
              className="px-8 py-3 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              강사님과 함께 성장하기
            </button>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-8 text-gray-900">강의 현장 스케치</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <img 
                src={`https://loremflickr.com/500/500/class,workshop?random=${i}`} 
                alt="Workshop Gallery" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Instructor;
