import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp, Users, Award, Star } from 'lucide-react';
import { REVIEWS_DATA } from '../constants';

const Main: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://loremflickr.com/1600/900/workshop,class" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col justify-center h-full">
          <div className="max-w-2xl animate-fade-in-up">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-secondary/30 bg-secondary/10 text-secondary text-sm font-semibold mb-6">
              <span className="flex h-2 w-2 rounded-full bg-secondary mr-2"></span>
              지금 신청하면 얼리버드 30% 할인
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
              퇴근 후 2시간, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">나를 성장시키는</span><br/>
              가장 확실한 투자
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              실무 10년 차 전문가의 노하우를 4주 만에 내 것으로 만드세요.
              이론이 아닌, 내일 당장 쓸 수 있는 실무 스킬을 배웁니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => navigate('/apply')}
                className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-white bg-primary hover:bg-primaryHover transition-all transform hover:scale-105 shadow-lg shadow-primary/30"
              >
                지금 시작하기
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button 
                onClick={() => navigate('/curriculum')}
                className="inline-flex justify-center items-center px-8 py-4 border border-gray-600 text-lg font-medium rounded-lg text-gray-200 hover:bg-gray-800 transition-colors"
              >
                커리큘럼 보기
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution / Stats */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
            <div className="p-4">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-gray-600 font-medium">수강생 만족도</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-primary mb-2">4주</div>
              <div className="text-gray-600 font-medium">실무 완성 기간</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-primary mb-2">1:1</div>
              <div className="text-gray-600 font-medium">전문가 밀착 피드백</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-bgMain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-base text-secondary font-semibold tracking-wide uppercase">Why Us?</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              왜 이 강의를 들어야 할까요?
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              다른 강의들과는 다릅니다. 우리는 '결과'에 집중합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="w-8 h-8 text-white" />,
                title: "실무 중심 커리큘럼",
                desc: "이론은 짧게, 실습은 길게. 현업에서 즉시 활용 가능한 프로젝트를 수행합니다."
              },
              {
                icon: <Users className="w-8 h-8 text-white" />,
                title: "네트워킹 커뮤니티",
                desc: "혼자 공부하지 마세요. 열정적인 동료들과 함께 성장하며 인맥을 넓힐 수 있습니다."
              },
              {
                icon: <Award className="w-8 h-8 text-white" />,
                title: "수료증 및 포트폴리오",
                desc: "강의가 끝나면 나만의 포트폴리오와 인증된 수료증을 손에 넣게 됩니다."
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
                <div className="inline-flex items-center justify-center p-3 bg-primary rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-12 lg:mb-0 relative">
               <div className="absolute top-0 left-0 w-full h-full bg-secondary/10 rounded-3xl transform -translate-x-4 -translate-y-4"></div>
               <img 
                 src="https://loremflickr.com/800/600/coding,notebook" 
                 alt="Curriculum Preview" 
                 className="relative rounded-3xl shadow-2xl w-full object-cover z-10"
               />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
                체계적인 4주 완성 로드맵
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                기초부터 심화까지, 단계별로 설계된 커리큘럼을 통해 비전공자도 전문가 수준으로 성장할 수 있습니다.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "1주차: 데이터 리터러시와 마인드셋",
                  "2주차: SQL 기초와 데이터 추출",
                  "3주차: 시각화와 설득의 기술",
                  "4주차: 파이널 프로젝트 & 피드백"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => navigate('/curriculum')}
                className="text-primary font-bold hover:text-primaryHover inline-flex items-center text-lg group"
              >
                전체 커리큘럼 자세히 보기
                <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-gray-900">수강생들의 리얼 후기</h2>
             <p className="mt-4 text-gray-500">이미 많은 분들이 성장의 기쁨을 경험했습니다.</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {REVIEWS_DATA.slice(0, 3).map((review) => (
               <div key={review.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full">
                 <div className="flex items-center mb-4">
                   {[...Array(5)].map((_, i) => (
                     <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-secondary fill-current' : 'text-gray-300'}`} />
                   ))}
                 </div>
                 <p className="text-gray-600 mb-6 flex-grow italic">"{review.content}"</p>
                 <div className="flex items-center mt-auto">
                   <img src={review.image} alt={review.name} className="w-10 h-10 rounded-full mr-3" />
                   <div>
                     <div className="text-sm font-bold text-gray-900">{review.name}</div>
                     <div className="text-xs text-gray-500">{review.role}</div>
                   </div>
                 </div>
               </div>
             ))}
           </div>
           <div className="mt-10 text-center">
             <button 
               onClick={() => navigate('/reviews')}
               className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
             >
               후기 더 보기
             </button>
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            망설이는 순간, 변화의 기회는 멀어집니다.
          </h2>
          <p className="text-blue-100 text-lg mb-10">
            지금 신청하시면 30% 얼리버드 혜택과 10만원 상당의 실무 템플릿을 무료로 드립니다.
            <br className="hidden md:block"/> 정원 마감까지 얼마 남지 않았습니다.
          </p>
          <button 
            onClick={() => navigate('/apply')}
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-primary bg-white hover:bg-gray-50 shadow-xl transform hover:-translate-y-1 transition-all"
          >
            지금 바로 신청하기
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
          <p className="mt-4 text-sm text-blue-200 opacity-80">
            * 100% 환불 보장 (강의 시작 3일 전까지)
          </p>
        </div>
      </section>
    </div>
  );
};

export default Main;
