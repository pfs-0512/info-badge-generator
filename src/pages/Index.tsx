import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white shadow-sm transition-all">
        <div className="container mx-auto flex items-center justify-between py-4">
          <img src="/logo.png" alt="Logo" className="h-8" />
          <button className="bg-[#ED7584] text-white px-6 py-2 rounded hover:bg-[#ED7584]/90 transition-colors">
            申込む
          </button>
        </div>
      </header>

      {/* Page Title */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center space-y-2">
          <h1 className="text-[#ED7584] text-3xl font-bold">PTA会員向けプラン</h1>
          <h2 className="text-2xl font-bold">プラン詳細</h2>
        </div>

        {/* Plans */}
        <div className="max-w-2xl mx-auto space-y-8 mt-12">
          {/* Aプラン */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">Aプラン</h2>
            <p className="text-center text-2xl mb-6">無料</p>
            
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="bg-gray-50 p-4 rounded-lg">
                  <span className="text-[#ED7584] text-[28px]">PTA情報配信システム</span>
                  <span className="text-sm text-blue-600 font-medium ml-2">[12月リリース]</span>
                </AccordionTrigger>
                <AccordionContent className="p-4">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-center">リアルタイム配信</h3>
                    <p className="text-center">PTAと保護者をつなぐ</p>
                    <p className="text-center">情報配信システム</p>
                    <div className="text-center mt-4">
                      <img src="/sec01img01.png" alt="配信システム" className="w-[70%] mx-auto" />
                    </div>
                    <p className="text-center">
                      今まで中々届かなかったPTAからの有益な情報がリアルタイムで届くようになります!
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <button className="w-full bg-blue-500 text-white py-3 rounded-lg mt-6 hover:bg-blue-600 transition-colors">
              申し込む
            </button>
          </div>

          {/* Bプラン */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <h2 className="text-2xl font-bold text-blue-600">Bプラン</h2>
              <img src="/sec04img01.png" alt="icon" className="w-8 h-8" />
            </div>
            <p className="text-center text-2xl mb-6">月額300円(税込)</p>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-2">
                <AccordionTrigger className="bg-gray-50 p-4 rounded-lg">
                  <span className="text-[#ED7584] text-[28px]">PTA情報配信システム</span>
                  <span className="text-sm text-blue-600 font-medium ml-2">[12月リリース]</span>
                </AccordionTrigger>
                <AccordionContent className="p-4">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-center">リアルタイム配信</h3>
                    <p className="text-center">PTAと保護者をつなぐ</p>
                    <p className="text-center">情報配信システム</p>
                    <div className="text-center mt-4">
                      <img src="/sec01img01.png" alt="配信システム" className="w-[70%] mx-auto" />
                    </div>
                    <p className="text-center">
                      今まで中々届かなかったPTAからの有益な情報がリアルタイムで届くようになります!
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-3">
                <AccordionTrigger className="bg-gray-50 p-4 rounded-lg">
                  <span className="text-[#FABE00] text-[28px]">会員制優待サービス</span>
                </AccordionTrigger>
                <AccordionContent className="p-4">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-center">会員制優待サービス</h3>
                    <p className="text-center">全国約<span className="color size">20</span><span className="color">万</span>件の会員制優待サービスがご利用できます！</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <button className="w-full bg-blue-500 text-white py-3 rounded-lg mt-6 hover:bg-blue-600 transition-colors">
              申し込む
            </button>
          </div>

          {/* Cプラン */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <h2 className="text-2xl font-bold text-blue-600">Cプラン</h2>
              <img src="/sec04img01.png" alt="icon" className="w-8 h-8" />
            </div>
            <p className="text-center text-2xl mb-6">月額500円(税込)</p>
            <p className="text-center text-yellow-500 text-sm font-medium mb-4">特別サービス付き！</p>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-4">
                <AccordionTrigger className="bg-gray-50 p-4 rounded-lg">
                  <span className="text-[#ED7584] text-[28px]">PTA情報配信システム</span>
                  <span className="text-sm text-blue-600 font-medium ml-2">[12月リリース]</span>
                </AccordionTrigger>
                <AccordionContent className="p-4">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-center">リアルタイム配信</h3>
                    <p className="text-center">PTAと保護者をつなぐ</p>
                    <p className="text-center">情報配信システム</p>
                    <div className="text-center mt-4">
                      <img src="/sec01img01.png" alt="配信システム" className="w-[70%] mx-auto" />
                    </div>
                    <p className="text-center">
                      今まで中々届かなかったPTAからの有益な情報がリアルタイムで届くようになります!
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <button className="w-full bg-blue-500 text-white py-3 rounded-lg mt-6 hover:bg-blue-600 transition-colors">
              申し込む
            </button>
          </div>

          {/* Dプラン */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <h2 className="text-2xl font-bold text-blue-600">Dプラン</h2>
              <img src="/sec04img01.png" alt="icon" className="w-8 h-8" />
            </div>
            <p className="text-center text-2xl mb-6">月額800円(税込)</p>
            <p className="text-center text-yellow-500 text-sm font-medium mb-4">2ヶ月後1,600円キャッシュバック</p>
            <p className="text-center text-yellow-500 text-sm font-medium mb-4">特別サービス付き！</p>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-5">
                <AccordionTrigger className="bg-gray-50 p-4 rounded-lg">
                  <span className="text-[#ED7584] text-[28px]">PTA情報配信システム</span>
                  <span className="text-sm text-blue-600 font-medium ml-2">[12月リリース]</span>
                </AccordionTrigger>
                <AccordionContent className="p-4">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-center">リアルタイム配信</h3>
                    <p className="text-center">PTAと保護者をつなぐ</p>
                    <p className="text-center">情報配信システム</p>
                    <div className="text-center mt-4">
                      <img src="/sec01img01.png" alt="配信システム" className="w-[70%] mx-auto" />
                    </div>
                    <p className="text-center">
                      今まで中々届かなかったPTAからの有益な情報がリアルタイムで届くようになります!
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <button className="w-full bg-blue-500 text-white py-3 rounded-lg mt-6 hover:bg-blue-600 transition-colors">
              申し込む
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
