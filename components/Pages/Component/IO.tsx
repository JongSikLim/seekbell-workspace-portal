import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { InfiniteScroll, LazyLoading } from './utils';
import Styles from 'styles/Pages/Component.module.scss';
const logos = [
  'https://camo.githubusercontent.com/b079fe922f00c4b86f1b724fbc2e8141c468794ce8adbc9b7456e5e1ad09c622/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f6769746875622e737667',
  'https://camo.githubusercontent.com/8f245234577766478eaf3ee72b0615e99bb9ef3eaa56e1c37f75692811181d5c/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f66616365626f6f6b2e737667',
  'https://camo.githubusercontent.com/c9dacf0f25a1489fdbc6c0d2b41cda58b77fa210a13a886d6f99e027adfbd358/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f696e7374616772616d2e737667',
  'https://camo.githubusercontent.com/45d2bca536994eea59eb8758b289563d9c4825ad1d661bbcf4800664b949496f/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f736c61636b2e737667',
  'https://camo.githubusercontent.com/8b52e302122a31c683c4a9cf8e71d29cc8aba3ebb6a5ac7ae7818b5b14ba1c15/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f676f6f676c652e737667',
  'https://camo.githubusercontent.com/98ce3f27aec475c03ad0441a7d4092f6b956814c7adc7f0049689dccedb82f1d/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f72656163742e737667',
  'https://camo.githubusercontent.com/0a52f68a159b75266c4ae21683fffa9cbc1af29ea6febc2a8c9ce260a05e521d/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f616e67756c61722e737667',
  'https://camo.githubusercontent.com/9c5e7333f1c4ac09c07988ceda17508df89b6830fe0b8fb416c4be19c5841578/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f7675652e737667',
  'https://camo.githubusercontent.com/ff660f3b34106793e1a8008592156f3127d8465adc82e103b9f2e0ce012c70ec/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f747970657363726970742e737667',
  'https://camo.githubusercontent.com/7cfd01e43b771693aee36615faba5e9d9b6eda7760989c883eb25b2f9158d925/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f727562792e737667',
  'https://camo.githubusercontent.com/9496882abd182958bcea4238ab44f7eb8928d7a4144c150f18f6c55ceb9b4490/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f6a6176617363726970742e737667',
];

function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
}

const IO = () => {
  const [imageUrlList, setImageUrlList] = useState<string[]>([]);

  const $imageList = useMemo(() => {
    const { length } = imageUrlList;
    return imageUrlList.map((url, idx) => {
      const $img = (
        <img
          key={`${url}-${idx}`}
          data-src={url}
          alt={url}
          className={Styles.logo}
          ref={($el) => {
            LazyLoading($el);

            if (length - 1 === idx) {
              InfiniteScroll($el, () => {
                setImageUrlList((prev) => {
                  return prev.concat(
                    Array(5)
                      .fill(null)
                      .map(() => {
                        const randomIndex = getRandomIntInclusive(0, 10);
                        return logos[randomIndex];
                      })
                  );
                });
              });
            }
          }}
        />
      );

      return $img;
    });
  }, [imageUrlList]);

  useLayoutEffect(() => {
    const newImageUrlList = Array(5)
      .fill(null)
      .map(() => {
        const randomIndex = getRandomIntInclusive(0, 10);
        return logos[randomIndex];
      });

    setImageUrlList(newImageUrlList);
  }, []);

  return (
    <div className={Styles.panelContainer}>
      <div className={Styles.panelItem}>
        <div className={Styles.imageBox}>{$imageList}</div>
      </div>
      <div className={Styles.panelItem}>
        <h2>Description</h2>
        <hr />
        <ul>
          <li>Vanilla JS로 개발</li>
          <li>LazyLoading 화면으로 하기 위해 딜레이 시점 늦게 선정</li>
          <li>무한 스크롤 트리거시 5개씩 추가 로딩</li>
        </ul>
      </div>
    </div>
  );
};

export default IO;
