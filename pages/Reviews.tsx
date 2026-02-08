import React from 'react';
import { REVIEWS_DATA } from '../constants';
import { Star } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const Reviews: React.FC = () => {
  // Mock data for charts
  const ratingData = [
    { name: '5점', count: 85 },
    { name: '4점', count: 12 },
    { name: '3점', count: 3 },
    { name: '2점', count: 0 },
    { name: '1점', count: 0 },
  ];

  return (
    <div className="bg-bgMain min-h-screen pb-20">
      <div className="bg-white border-b border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">수강생 리얼 후기</h1>
          <p className="text-xl text-gray-500">
            평균 평점 4.9/5.0, 누적 수강생 2,000명이 증명합니다.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Dashboard Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Summary Card */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-center items-center text-center">
             <div className="text-6xl font-extrabold text-gray-900 mb-2">4.9</div>
             <div className="flex mb-4">
               {[...Array(5)].map((_, i) => (
                 <Star key={i} className="w-6 h-6 text-secondary fill-current" />
               ))}
             </div>
             <div className="text-gray-500 font-medium">총 1,240개의 평가</div>
          </div>

          {/* Chart Card */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 md:col-span-2">
            <h3 className="text-lg font-bold text-gray-900 mb-4">평점 분포</h3>
            <div className="h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={ratingData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" width={40} tick={{fontSize: 14}} axisLine={false} tickLine={false} />
                  <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '8px' }} />
                  <Bar dataKey="count" radius={[0, 4, 4, 0]} barSize={20}>
                    {ratingData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 0 ? '#F59E0B' : '#CBD5E1'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Reviews Grid (Masonry-ish using columns) */}
        <h2 className="text-2xl font-bold mb-8 text-gray-900">베스트 리뷰</h2>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {/* Repeat dummy data to fill the grid */}
          {[...REVIEWS_DATA, ...REVIEWS_DATA, ...REVIEWS_DATA].map((review, idx) => (
            <div key={`${review.id}-${idx}`} className="break-inside-avoid bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <img src={review.image} alt={review.name} className="w-10 h-10 rounded-full mr-3 object-cover" />
                  <div>
                    <div className="text-sm font-bold text-gray-900">{review.name}</div>
                    <div className="text-xs text-gray-500">{review.role}</div>
                  </div>
                </div>
                <span className="text-xs text-gray-400">{review.date}</span>
              </div>
              
              <div className="flex mb-3">
                 {[...Array(5)].map((_, i) => (
                   <Star key={i} size={14} className={`${i < review.rating ? 'text-secondary fill-current' : 'text-gray-300'}`} />
                 ))}
              </div>

              <p className="text-gray-700 leading-relaxed text-sm">
                "{review.content}"
              </p>
              
              {/* Randomly add review images for visual variety */}
              {idx % 3 === 0 && (
                <div className="mt-4 rounded-lg overflow-hidden h-40">
                  <img 
                    src={`https://loremflickr.com/400/300/office,work?random=${idx}`} 
                    alt="Review attachment" 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="px-6 py-3 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50 font-medium transition-colors">
            더 많은 후기 불러오기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
