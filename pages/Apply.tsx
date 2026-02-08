import React, { useState } from 'react';
import { PRICING_OPTIONS } from '../constants';
import { Check, Calendar, CreditCard, Lock, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Apply: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>('standard');
  const [step, setStep] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  // Simple mock for dates
  const availableDates = [
    '2024년 4월 6일 (토) 개강',
    '2024년 5월 4일 (토) 개강',
    '2024년 6월 1일 (토) 개강',
  ];
  const [selectedDate, setSelectedDate] = useState(availableDates[0]);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsModalOpen(true);
    }, 1000);
  };

  const selectedPlanData = PRICING_OPTIONS.find(p => p.id === selectedPlan);

  return (
    <div className="bg-gray-50 min-h-screen py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Step Indicator */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            <div className={`flex items-center justify-center w-8 h-8 rounded-full font-bold ${step === 1 ? 'bg-primary text-white' : 'bg-green-500 text-white'}`}>1</div>
            <div className={`h-1 w-16 ${step === 2 ? 'bg-primary' : 'bg-gray-300'}`}></div>
            <div className={`flex items-center justify-center w-8 h-8 rounded-full font-bold ${step === 2 ? 'bg-primary text-white' : 'bg-gray-300 text-gray-500'}`}>2</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form Area */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Step 1: Option Selection */}
            {step === 1 && (
              <div className="space-y-8 animate-fade-in">
                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Calendar className="mr-3 text-primary"/> 일정 선택
                  </h2>
                  <div className="grid grid-cols-1 gap-4">
                    {availableDates.map((date) => (
                      <label key={date} className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all ${selectedDate === date ? 'border-primary bg-blue-50 ring-1 ring-primary' : 'border-gray-200 hover:border-blue-300'}`}>
                        <input 
                          type="radio" 
                          name="date" 
                          value={date} 
                          checked={selectedDate === date}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          className="w-5 h-5 text-primary border-gray-300 focus:ring-primary"
                        />
                        <span className="ml-3 font-medium text-gray-900">{date}</span>
                        {date.includes('4월') && <span className="ml-auto text-xs font-bold text-red-500 bg-red-100 px-2 py-1 rounded">마감 임박</span>}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">플랜 선택</h2>
                  <div className="space-y-4">
                    {PRICING_OPTIONS.map((plan) => (
                      <div 
                        key={plan.id}
                        onClick={() => setSelectedPlan(plan.id)}
                        className={`relative p-6 border rounded-xl cursor-pointer transition-all ${selectedPlan === plan.id ? 'border-primary bg-white ring-2 ring-primary shadow-md' : 'border-gray-200 bg-white hover:border-blue-300'}`}
                      >
                        {plan.isPopular && (
                          <div className="absolute -top-3 left-6 px-3 py-1 bg-secondary text-white text-xs font-bold rounded-full shadow-sm">
                            MOST POPULAR
                          </div>
                        )}
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="font-bold text-lg text-gray-900">{plan.name}</h3>
                          <div className="text-right">
                             <span className="text-gray-400 line-through text-sm block">₩{plan.originalPrice.toLocaleString()}</span>
                             <span className="text-primary font-bold text-xl">₩{plan.price.toLocaleString()}</span>
                          </div>
                        </div>
                        <ul className="space-y-2">
                          {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <Check size={16} className="text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => setStep(2)}
                  className="w-full py-4 bg-primary text-white rounded-xl font-bold text-lg shadow-lg hover:bg-primaryHover transition-colors flex justify-center items-center"
                >
                  다음 단계로 <ChevronRight className="ml-2"/>
                </button>
              </div>
            )}

            {/* Step 2: Payment */}
            {step === 2 && (
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 animate-fade-in">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <CreditCard className="mr-3 text-primary"/> 결제 정보 입력
                </h2>
                <form onSubmit={handlePayment} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">이름</label>
                      <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="홍길동" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">연락처</label>
                      <input type="tel" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="010-1234-5678" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">이메일</label>
                    <input type="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="example@email.com" />
                  </div>

                  <div className="border-t border-gray-100 pt-6">
                     <h3 className="font-semibold text-gray-900 mb-4">결제 수단</h3>
                     <div className="grid grid-cols-2 gap-4">
                       <button type="button" className="py-3 border border-primary text-primary bg-blue-50 font-medium rounded-lg">신용카드</button>
                       <button type="button" className="py-3 border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium rounded-lg">무통장입금</button>
                       <button type="button" className="py-3 border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium rounded-lg">카카오페이</button>
                       <button type="button" className="py-3 border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium rounded-lg">토스페이</button>
                     </div>
                  </div>

                  <div className="flex items-center text-sm text-gray-500 bg-gray-50 p-4 rounded-lg">
                    <Lock size={16} className="mr-2" />
                    모든 결제 정보는 암호화되어 안전하게 처리됩니다.
                  </div>

                  <div className="flex gap-4">
                    <button 
                      type="button" 
                      onClick={() => setStep(1)}
                      className="w-1/3 py-4 border border-gray-300 text-gray-700 rounded-xl font-bold text-lg hover:bg-gray-50 transition-colors"
                    >
                      이전
                    </button>
                    <button 
                      type="submit"
                      className="w-2/3 py-4 bg-primary text-white rounded-xl font-bold text-lg shadow-lg hover:bg-primaryHover transition-colors"
                    >
                      {selectedPlanData?.price.toLocaleString()}원 결제하기
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Sidebar Summary */}
          <div className="lg:col-span-1">
             <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
               <h3 className="text-lg font-bold text-gray-900 mb-4">선택 내역</h3>
               
               <div className="space-y-4 mb-6">
                 <div>
                   <div className="text-xs text-gray-500 mb-1">강의</div>
                   <div className="font-medium text-gray-900">데이터 리터러시 4주 완성반</div>
                 </div>
                 <div>
                   <div className="text-xs text-gray-500 mb-1">일정</div>
                   <div className="font-medium text-gray-900">{selectedDate}</div>
                 </div>
                 <div>
                   <div className="text-xs text-gray-500 mb-1">플랜</div>
                   <div className="font-medium text-gray-900">{selectedPlanData?.name}</div>
                 </div>
               </div>
               
               <div className="border-t border-gray-100 pt-4 mb-2">
                 <div className="flex justify-between text-gray-500 mb-2">
                   <span>정가</span>
                   <span className="line-through">₩{selectedPlanData?.originalPrice.toLocaleString()}</span>
                 </div>
                 <div className="flex justify-between text-secondary font-medium mb-4">
                   <span>얼리버드 할인</span>
                   <span>- ₩{(selectedPlanData!.originalPrice - selectedPlanData!.price).toLocaleString()}</span>
                 </div>
                 <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                   <span className="font-bold text-lg text-gray-900">총 결제 금액</span>
                   <span className="font-extrabold text-2xl text-primary">₩{selectedPlanData?.price.toLocaleString()}</span>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl animate-fade-in-up">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">신청이 완료되었습니다!</h2>
            <p className="text-gray-600 mb-8">
              입력하신 이메일로 안내 메일이 발송되었습니다.<br/>
              강의 시작일에 만나요!
            </p>
            <button 
              onClick={() => {
                setIsModalOpen(false);
                navigate('/');
              }}
              className="w-full py-3 bg-primary text-white rounded-lg font-bold hover:bg-primaryHover transition-colors"
            >
              홈으로 돌아가기
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Apply;
