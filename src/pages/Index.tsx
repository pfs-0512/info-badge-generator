const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">PTA会員向けプラン</h1>
        <h2 className="text-xl text-center text-gray-600 mb-12">プラン詳細</h2>

        {/* Aプラン */}
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="text-2xl font-bold text-center text-blue-600 mb-2">Aプラン</div>
          <div className="text-center text-gray-600 mb-4">無料</div>
          <div className="flex items-center justify-between p-4 bg-[#F3F9FC] rounded mb-4">
            <span className="text-[#ED7584] text-[28px]">PTA情報配信システム</span>
            <span className="text-white bg-blue-700 rounded-full px-3 py-1 text-sm font-medium">12月オープン予定</span>
          </div>
          <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors">
            申し込む
          </button>
        </div>

        {/* Bプラン */}
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="text-2xl font-bold text-center text-blue-600 mb-2">Bプラン</div>
          <div className="text-center text-gray-600 mb-4">月額300円(税込)</div>
          <div className="flex items-center justify-between p-4 bg-[#F3F9FC] rounded mb-4">
            <span className="text-[#ED7584] text-[28px]">PTA情報配信システム</span>
            <span className="text-white bg-blue-700 rounded-full px-3 py-1 text-sm font-medium">12月オープン予定</span>
          </div>
          <div className="p-4 bg-[#F3F9FC] rounded mb-4">
            <span className="text-gray-700 text-[28px]">会員制便得サービス</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-[#F3F9FC] rounded mb-4">
            <span className="text-[#FABE00] text-[28px]">オンラインスクール有料視聴チケット</span>
            <span className="text-white bg-blue-700 rounded-full px-3 py-1 text-sm font-medium">11月オープン予定</span>
          </div>
          <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors">
            申し込む
          </button>
        </div>

        {/* Cプラン */}
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="text-2xl font-bold text-center text-blue-600 mb-2">Cプラン</div>
          <div className="text-center text-gray-600 mb-4">月額500円(税込)</div>
          <div className="text-center text-yellow-500 text-sm font-medium mb-4">特別サービス付き！</div>
          <div className="flex items-center justify-between p-4 bg-[#F3F9FC] rounded mb-4">
            <span className="text-[#ED7584] text-[28px]">PTA情報配信システム</span>
            <span className="text-white bg-blue-700 rounded-full px-3 py-1 text-sm font-medium">12月オープン予定</span>
          </div>
          <div className="p-4 bg-[#F3F9FC] rounded mb-4">
            <span className="text-gray-700 text-[28px]">会員制便得サービス</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-[#F3F9FC] rounded mb-4">
            <span className="text-[#FABE00] text-[28px]">オンラインスクール有料視聴チケット</span>
            <span className="text-white bg-blue-700 rounded-full px-3 py-1 text-sm font-medium">11月オープン予定</span>
          </div>
          <div className="text-center text-sm text-gray-600 mt-4 mb-4">
            日常生活で役に立つ様々なサービスが受けられるプラン
          </div>
          <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors">
            申し込む
          </button>
        </div>

        {/* Dプラン */}
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
          <div className="text-2xl font-bold text-center text-blue-600 mb-2">Dプラン</div>
          <div className="text-center text-gray-600 mb-4">月額800円(税込)</div>
          <div className="text-center text-yellow-500 text-sm font-medium mb-2">2ヶ月後1,600円キャッシュバック</div>
          <div className="text-center text-yellow-500 text-sm font-medium mb-4">特別サービス付き！</div>
          <div className="flex items-center justify-between p-4 bg-[#F3F9FC] rounded mb-4">
            <span className="text-[#ED7584] text-[28px]">PTA情報配信システム</span>
            <span className="text-white bg-blue-700 rounded-full px-3 py-1 text-sm font-medium">12月オープン予定</span>
          </div>
          <div className="p-4 bg-[#F3F9FC] rounded mb-4">
            <span className="text-gray-700 text-[28px]">会員制便得サービス</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-[#F3F9FC] rounded mb-4">
            <span className="text-[#FABE00] text-[28px]">オンラインスクール有料視聴チケット</span>
            <span className="text-white bg-blue-700 rounded-full px-3 py-1 text-sm font-medium">11月オープン予定</span>
          </div>
          <div className="p-4 bg-[#F3F9FC] rounded mb-4">
            <span className="text-gray-700 text-[28px]">モバイル安心サポート保険</span>
          </div>
          <div className="text-center text-sm text-gray-600 mt-4 mb-4">
            Cプランの内容に加え、スマホの紛失や修理時に対応できる保険機能も備わったプラン
          </div>
          <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors">
            申し込む
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;