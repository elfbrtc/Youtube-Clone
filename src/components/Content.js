import React from 'react'
import VideoCard from './VideoCard';
import '../style/Content.scss';

function Content() {
  return (
    <div className="content">
        <h2>Recommended</h2>
        <div className='content__videos'>
          <VideoCard 
          title="Kedo"
          views="1.5M Views"
          timestamp="3 days ago"
          channelImage="https://ichef.bbci.co.uk/news/640/cpsprodpb/16FA9/production/_92712149_gettyimages-480164327.jpg"
          channel="Elif Barutçu"
          image="https://www.evcilevi.com/wp-content/uploads/2021/07/british-short-hair-silver-shaded-erkek-2-300x300.jpeg"
          />
          <VideoCard 
          title="Kedi"
          views="1.9M Views"
          timestamp="5 days ago"
          channelImage="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/VAN_CAT.png/300px-VAN_CAT.png"
          channel="Eda Barutçu"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/VAN_CAT.png/300px-VAN_CAT.png"
          />
          <VideoCard 
          title="Kedoş"
          views="3.5M Views"
          timestamp="3 days ago"
          channelImage="https://galeri14.uludagsozluk.com/882/kedi-uzerinden-prim-yapan-ezik-insanlar_1493312_m.jpg"
          channel="Ogün Can Kaya"
          image="https://i.pinimg.com/originals/ac/4e/28/ac4e28b2588d0800c9b2df01ceac5015.jpg"
          />
          <VideoCard 
          title="Kediş"
          views="2.5M Views"
          timestamp="3 days ago"
          channelImage="https://i.pinimg.com/236x/48/6d/8c/486d8c979ba21cd75a38d1e4f74d108a.jpg"
          channel="Fatma Zehra Saçaklıdır"
          image="https://i.pinimg.com/474x/b0/24/08/b024087aedd5f7073c97b7644b4c3a34.jpg"
          />
          <VideoCard 
          title="Kedo"
          views="1.5M Views"
          timestamp="3 days ago"
          channelImage="https://ichef.bbci.co.uk/news/640/cpsprodpb/16FA9/production/_92712149_gettyimages-480164327.jpg"
          channel="Elif Barutçu"
          image="https://www.evcilevi.com/wp-content/uploads/2021/07/british-short-hair-silver-shaded-erkek-2-300x300.jpeg"
          />
          <VideoCard 
          title="Kedi"
          views="1.9M Views"
          timestamp="5 days ago"
          channelImage="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/VAN_CAT.png/300px-VAN_CAT.png"
          channel="Eda Barutçu"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/VAN_CAT.png/300px-VAN_CAT.png"
          />
          <VideoCard 
          title="Kedoş"
          views="3.5M Views"
          timestamp="3 days ago"
          channelImage="https://galeri14.uludagsozluk.com/882/kedi-uzerinden-prim-yapan-ezik-insanlar_1493312_m.jpg"
          channel="Ogün Can Kaya"
          image="https://i.pinimg.com/originals/ac/4e/28/ac4e28b2588d0800c9b2df01ceac5015.jpg"
          />
          <VideoCard 
          title="Kediş"
          views="2.5M Views"
          timestamp="3 days ago"
          channelImage="https://i.pinimg.com/236x/48/6d/8c/486d8c979ba21cd75a38d1e4f74d108a.jpg"
          channel="Fatma Zehra Saçaklıdır"
          image="https://i.pinimg.com/474x/b0/24/08/b024087aedd5f7073c97b7644b4c3a34.jpg"
          />
          
        </div>
    </div>
  )
}

export default Content