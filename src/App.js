import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
      <ul className="navbar-nav">
        <li className="logo">
          <a href="#" className="nav-link">
            <span className="link-text">Animator</span>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="angle-double-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
            >
              <g className="fa-group">
                <path
                  fill="currentColor"
                  d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                  className="fa-secondary"
                ></path>
                <path
                  fill="currentColor"
                  d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                  className="fa-primary"
                ></path>
              </g>
            </svg>
          </a>
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="cat"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="svg-inline--fa fa-cat fa-w-16 fa-9x"
            >
              <g className="fa-group">
                <path
                  fill="currentColor"
                  d="M448 96h-64l-64-64v134.4a96 96 0 0 0 192 0V32zm-72 80a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm80 0a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm-165.41 16a204.07 204.07 0 0 0-34.59 2.89V272l-43.15-64.73a183.93 183.93 0 0 0-44.37 26.17L192 304l-60.94-30.47L128 272v-80a96.1 96.1 0 0 0-96-96 32 32 0 0 0 0 64 32 32 0 0 1 32 32v256a64.06 64.06 0 0 0 64 64h176a16 16 0 0 0 16-16v-16a32 32 0 0 0-32-32h-32l128-96v144a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V289.86a126.78 126.78 0 0 1-32 4.54c-61.81 0-113.52-44.05-125.41-102.4z"
                  className="fa-secondary"
                ></path>
                <path
                  fill="currentColor"
                  d="M376 144a16 16 0 1 0 16 16 16 16 0 0 0-16-16zm80 0a16 16 0 1 0 16 16 16 16 0 0 0-16-16zM131.06 273.53L192 304l-23.52-70.56a192.06 192.06 0 0 0-37.42 40.09zM256 272v-77.11a198.62 198.62 0 0 0-43.15 12.38z"
                  className="fa-primary"
                ></path>
              </g>
            </svg>
            <span className="link-text">Cats</span>
          </a>
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="alien-monster"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              className="svg-inline--fa fa-alien-monster fa-w-18 fa-9x"
            >
              <g className="fa-group">
                <path
                  fill="currentColor"
                  d="M560,128H528a15.99954,15.99954,0,0,0-16,16v80H480V176a15.99954,15.99954,0,0,0-16-16H416V96h48a16.00079,16.00079,0,0,0,16-16V48a15.99954,15.99954,0,0,0-16-16H432a15.99954,15.99954,0,0,0-16,16V64H368a15.99954,15.99954,0,0,0-16,16v48H224V80a15.99954,15.99954,0,0,0-16-16H160V48a15.99954,15.99954,0,0,0-16-16H112A15.99954,15.99954,0,0,0,96,48V80a16.00079,16.00079,0,0,0,16,16h48v64H112a15.99954,15.99954,0,0,0-16,16v48H64V144a15.99954,15.99954,0,0,0-16-16H16A15.99954,15.99954,0,0,0,0,144V272a16.00079,16.00079,0,0,0,16,16H64v80a16.00079,16.00079,0,0,0,16,16h48v80a16.00079,16.00079,0,0,0,16,16h96a16.00079,16.00079,0,0,0,16-16V432a15.99954,15.99954,0,0,0-16-16H192V384H384v32H336a15.99954,15.99954,0,0,0-16,16v32a16.00079,16.00079,0,0,0,16,16h96a16.00079,16.00079,0,0,0,16-16V384h48a16.00079,16.00079,0,0,0,16-16V288h48a16.00079,16.00079,0,0,0,16-16V144A15.99954,15.99954,0,0,0,560,128ZM224,320H160V224h64Zm192,0H352V224h64Z"
                  className="fa-secondary"
                ></path>
                <path
                  fill="currentColor"
                  d="M160,320h64V224H160Zm192-96v96h64V224Z"
                  className="fa-primary"
                ></path>
              </g>
            </svg>
            <span className="link-text">Aliens</span>
          </a>
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="space-station-moon-alt"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="svg-inline--fa fa-space-station-moon-alt fa-w-16 fa-5x"
            >
              <g className="fa-group">
                <path
                  fill="currentColor"
                  d="M501.70312,224H448V160H368V96h48V66.67383A246.86934,246.86934,0,0,0,256,8C119.03125,8,8,119.0332,8,256a250.017,250.017,0,0,0,1.72656,28.26562C81.19531,306.76953,165.47656,320,256,320s174.80469-13.23047,246.27344-35.73438A250.017,250.017,0,0,0,504,256,248.44936,248.44936,0,0,0,501.70312,224ZM192,240a80,80,0,1,1,80-80A80.00021,80.00021,0,0,1,192,240ZM384,343.13867A940.33806,940.33806,0,0,1,256,352c-87.34375,0-168.71094-11.46094-239.28906-31.73633C45.05859,426.01953,141.29688,504,256,504a247.45808,247.45808,0,0,0,192-91.0918V384H384Z"
                  className="fa-secondary"
                ></path>
                <path
                  fill="currentColor"
                  d="M256,320c-90.52344,0-174.80469-13.23047-246.27344-35.73438a246.11376,246.11376,0,0,0,6.98438,35.998C87.28906,340.53906,168.65625,352,256,352s168.71094-11.46094,239.28906-31.73633a246.11376,246.11376,0,0,0,6.98438-35.998C430.80469,306.76953,346.52344,320,256,320Zm-64-80a80,80,0,1,0-80-80A80.00021,80.00021,0,0,0,192,240Zm0-104a24,24,0,1,1-24,24A23.99993,23.99993,0,0,1,192,136Z"
                  className="fa-primary"
                ></path>
              </g>
            </svg>
            <span className="link-text">Space</span>
          </a>
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="space-shuttle"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              className="svg-inline--fa fa-space-shuttle fa-w-20 fa-5x"
            >
              <g className="fa-group">
                <path
                  fill="currentColor"
                  d="M32 416c0 35.35 21.49 64 48 64h16V352H32zm154.54-232h280.13L376 168C243 140.59 222.45 51.22 128 34.65V160h18.34a45.62 45.62 0 0 1 40.2 24zM32 96v64h64V32H80c-26.51 0-48 28.65-48 64zm114.34 256H128v125.35C222.45 460.78 243 371.41 376 344l90.67-16H186.54a45.62 45.62 0 0 1-40.2 24z"
                  className="fa-secondary"
                ></path>
                <path
                  fill="currentColor"
                  d="M592.6 208.24C559.73 192.84 515.78 184 472 184H186.54a45.62 45.62 0 0 0-40.2-24H32c-23.2 0-32 10-32 24v144c0 14 8.82 24 32 24h114.34a45.62 45.62 0 0 0 40.2-24H472c43.78 0 87.73-8.84 120.6-24.24C622.28 289.84 640 272 640 256s-17.72-33.84-47.4-47.76zM488 296a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8c31.91 0 31.94 80 0 80z"
                  className="fa-primary"
                ></path>
              </g>
            </svg>
            <span className="link-text">Shuttle</span>
          </a>
        </li>

        <li className="nav-item" id="themeButton">
          <a href="#" className="nav-link">
            <svg
              className="theme-icon"
              id="lightIcon"
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="moon-stars"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="svg-inline--fa fa-moon-stars fa-w-16 fa-7x"
            >
              <g className="fa-group">
                <path
                  fill="currentColor"
                  d="M320 32L304 0l-16 32-32 16 32 16 16 32 16-32 32-16zm138.7 149.3L432 128l-26.7 53.3L352 208l53.3 26.7L432 288l26.7-53.3L512 208z"
                  className="fa-secondary"
                ></path>
                <path
                  fill="currentColor"
                  d="M332.2 426.4c8.1-1.6 13.9 8 8.6 14.5a191.18 191.18 0 0 1-149 71.1C85.8 512 0 426 0 320c0-120 108.7-210.6 227-188.8 8.2 1.6 10.1 12.6 2.8 16.7a150.3 150.3 0 0 0-76.1 130.8c0 94 85.4 165.4 178.5 147.7z"
                  className="fa-primary"
                ></path>
              </g>
            </svg>
            <span className="link-text">Themify</span>
          </a>
        </li>
      </ul>
    </nav>

    <main>
      <h1>Tech Bubble Is Bursting...</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, quaerat
        laboriosam, aliquam possimus quas consequatur excepturi aspernatur
        officia porro nisi itaque impedit voluptatum nobis sapiente consequuntur
        deserunt labore beatae est iure ducimus. Odit dolorem consequuntur
        obcaecati enim rerum natus temporibus nisi quam, est deserunt sint quae
        et nobis, similique ut vero repudiandae qui magnam numquam dolor, vel
        consequatur! Suscipit blanditiis beatae nostrum, accusantium animi
        dolores reprehenderit in dolore eius natus aut ex quia quisquam quas
        rerum commodi. Debitis dolor excepturi nulla in aliquid soluta, beatae
        necessitatibus accusantium alias, porro repudiandae iste exercitationem
        voluptatem cupiditate earum quod totam, quae a unde! A quae deleniti
        amet aliquid cum numquam blanditiis, quibusdam minima culpa eveniet
        porro ratione ullam saepe quisquam reprehenderit fuga nobis officia
        assumenda sapiente provident doloremque eius nemo. At, consequatur
        neque? Temporibus labore facilis error, dignissimos illum omnis neque
        vero ipsum rerum corporis similique consequuntur amet totam nihil ea
        adipisci animi, tenetur veniam eum perferendis delectus odio!
        Accusantium ab temporibus quas numquam fugit ullam fugiat dolor
        reprehenderit, quibusdam modi voluptatum, libero nostrum aspernatur
        culpa autem at, eum dolorem. Quaerat et voluptatum quisquam pariatur
        consequatur fuga, sed optio magnam autem dolores assumenda corrupti
        tenetur consectetur, temporibus earum nobis quidem magni sapiente unde
        reiciendis itaque eveniet? A repellendus suscipit magni, dolorum
        accusamus magnam dolor odit quam error voluptatibus voluptate aut
        molestias ea reprehenderit harum nisi, ut, eius fugit voluptas
        praesentium maxime eligendi velit reiciendis? Consequuntur ratione,
        assumenda ipsa eius adipisci quibusdam ad fugiat cum ex eligendi
        officiis incidunt perspiciatis voluptate illo vitae amet molestiae quis
        aliquid corrupti saepe suscipit deserunt aperiam. Magnam deserunt quo
        necessitatibus sed praesentium. Error, adipisci id? Nihil a dolor
        aspernatur atque temporibus? Quia illum ex nostrum nam, sint officiis
        ratione cumque consectetur, necessitatibus mollitia ipsam vero
        doloremque debitis est libero minus id quo dolorem perspiciatis tempora
        ullam? Error, assumenda.
      </p>
      <p>
        Consectetur illo rem, error ipsum labore animi! Recusandae placeat
        perspiciatis doloribus est asperiores magni saepe, ipsa quisquam dolores
        voluptatem eos aut odit incidunt explicabo, velit itaque dolor fuga
        porro, tempora at consectetur ipsum debitis numquam! Unde et sequi
        aliquam reiciendis aperiam, pariatur ipsum consequuntur ducimus, tempora
        itaque temporibus aspernatur facere. Ratione neque assumenda accusantium
        reprehenderit minus, reiciendis saepe eum voluptate? Dicta vitae quidem
        minima neque ea, iure magni repellat quam nemo, eaque, modi accusantium.
        Repellat perspiciatis at vel nemo pariatur vero deserunt culpa optio
        eius laboriosam aliquid illo quaerat, veritatis quis atque facilis quam
        itaque adipisci voluptates similique? Odit consequuntur, nesciunt omnis
        maxime accusamus facere cum eum neque deserunt similique ipsam suscipit
        aspernatur consequatur a rem. Cumque totam praesentium temporibus
        blanditiis amet repellat aliquam, beatae maxime eos consectetur vero
        deserunt ut similique cupiditate odit. Quia inventore ad illum ut nulla
        tenetur voluptas qui at officiis minima sint cum sit ea cumque maxime
        sed facere nobis, saepe tempore et commodi itaque reprehenderit placeat.
        Ad at ipsum neque. Debitis eaque odit obcaecati. Neque tempore laborum
        fugit ipsum ducimus dolores assumenda, fuga reiciendis numquam repellat
        voluptas, quaerat, a nostrum perferendis sequi mollitia esse aut
        similique in. Animi non vero labore rerum, ducimus autem. Modi deleniti
        eligendi commodi. Illum, a distinctio quaerat eos saepe dolore alias qui
        consectetur officia, ad molestiae, laborum odit dolorum repellat facere
        animi nulla sed? Consectetur reiciendis in, enim voluptatem provident
        sit autem ducimus quis nesciunt fugiat ullam earum adipisci ratione
        error voluptatibus, quam explicabo! Cupiditate saepe eos laborum tenetur
        sunt eum veritatis nesciunt iste repellat in accusamus modi, similique
        ducimus quam aperiam libero natus. Natus, alias nihil sunt praesentium,
        libero vero facere saepe quaerat ad illum similique ut officia nisi
        officiis impedit dolores esse ea optio. Quas neque iusto provident
        architecto veritatis facilis accusamus! Eos laudantium porro excepturi
        enim!
      </p>
      <p>
        Labore eos blanditiis deserunt officia libero officiis fuga dolore nobis
        praesentium quod? Rerum saepe assumenda magnam facilis sunt corporis?
        Omnis molestias magni adipisci id ab magnam quia officia odio,
        laboriosam ad officiis blanditiis velit consequatur, quibusdam harum.
        Quod fugit nulla magni. Sequi molestias quo nulla. Repudiandae provident
        error molestiae minus ea dolore similique porro eaque voluptas odit,
        ipsam, nostrum illo voluptatum fugit. Maiores nisi impedit, perferendis
        architecto velit quis quia cumque, et sed asperiores consequatur
        repellendus repudiandae minus reiciendis sunt tempore, dolor debitis.
        Corporis eaque aspernatur nam accusantium eius cupiditate. Dicta,
        dolorum cumque debitis praesentium tempora suscipit corporis. Ut
        exercitationem adipisci magni eaque harum. Consequuntur, consequatur
        architecto beatae vero id eum autem eligendi minima sapiente nobis
        fugiat culpa sit veritatis doloremque laboriosam corrupti. Voluptate,
        suscipit laborum dicta illo consequatur atque quidem error, quisquam
        maxime non sunt animi ut odio numquam fugit quod tempore sequi odit
        perferendis aliquam asperiores. Voluptas eum nostrum quibusdam, commodi
        asperiores quis facere. Aliquam aut minima dolor quo harum delectus
        pariatur optio aspernatur. Exercitationem quos aliquam fugiat eligendi
        delectus reiciendis vel alias minima voluptate odio labore laboriosam
        quas beatae similique ab magni, deserunt vitae? Voluptas numquam
        voluptates molestiae recusandae non, quasi optio dignissimos repellendus
        officia? Sed in, placeat culpa, iure maiores ipsum dolorum ad nam animi
        laborum dolore veritatis illum. Aspernatur assumenda, tenetur,
        voluptatem sunt fugit quaerat praesentium error voluptate, ex blanditiis
        eveniet aut. Maxime error, consequatur ullam odit necessitatibus magnam
        in. Earum, nulla ipsa necessitatibus alias voluptatem rerum possimus,
        sit numquam aspernatur iure veniam molestias aliquid dolore quidem aut
        vel ab! Doloremque quam natus impedit assumenda nobis hic accusantium
        deleniti molestiae eligendi, tenetur harum porro ea, quidem quasi itaque
        cumque veniam distinctio dicta quae, obcaecati reprehenderit iure sed
        aliquid nostrum. Illum qui eius nulla harum nostrum ducimus. Blanditiis
        amet dolores ipsa iure magnam perspiciatis itaque odio!
      </p>
      <p>
        Magnam, cupiditate eligendi dolor praesentium temporibus distinctio
        consequuntur repellendus ut cumque. Sit dolor commodi ut facilis
        voluptate, nam deleniti at, ipsa eveniet dolore odio rem consequatur
        atque qui accusamus rerum aliquid magni aut dicta saepe iste tenetur.
        Voluptatibus sed odio delectus praesentium soluta vero ipsam ratione
        autem distinctio saepe, laboriosam cumque facilis assumenda maxime nisi
        optio ut quisquam. Pariatur, corrupti accusamus. Nesciunt, alias nemo
        error optio est reprehenderit dolore, et nisi blanditiis sapiente ad
        repudiandae tenetur odio, omnis distinctio dolor molestias! Dignissimos
        consequatur sunt consequuntur quibusdam similique nesciunt ab
        accusantium debitis commodi. Nemo voluptate, accusantium minus dolores,
        blanditiis autem quis ipsam aliquam facere laudantium ipsum inventore
        officia temporibus aliquid nam praesentium quae, provident perspiciatis
        totam obcaecati mollitia. Quibusdam recusandae perspiciatis voluptas, at
        officiis sunt, eaque accusantium omnis nostrum ad ipsum magnam.
        Assumenda culpa explicabo qui magnam odit est soluta fuga illo, omnis
        ipsum iusto voluptatum adipisci, veritatis ut non voluptatem consectetur
        cupiditate, ipsa veniam accusantium repellat! Ex similique nihil animi,
        voluptates mollitia atque. Nostrum nobis nihil veritatis doloribus.
        Repellendus deleniti dicta maiores repudiandae ex iste odit doloremque
        dignissimos, vitae veritatis dolor vel accusantium placeat qui
        consectetur. Repellat iste repudiandae perferendis quos mollitia
        expedita dolorem sapiente voluptate ea nostrum! Quasi numquam quibusdam
        deleniti blanditiis, esse quis architecto aspernatur nihil molestias ad
        ipsam, inventore veniam consequatur id exercitationem! Voluptatibus
        illum quisquam dicta accusamus accusantium esse aspernatur numquam rerum
        error. Fugiat optio fugit eligendi itaque sunt, dolores expedita porro
        ea esse officiis dignissimos repellat cum voluptates quod voluptas
        nostrum libero eveniet inventore rerum dolorum reprehenderit excepturi
        neque? Eum ducimus ratione odio sed sequi delectus molestias quo at
        repellendus voluptatum, voluptate ab excepturi dolor deserunt ipsum hic?
        Praesentium aut quis sint non voluptatum possimus iste! Fugiat nostrum
        iste ipsum quis fugit blanditiis eum eius adipisci sit quas tenetur, cum
        vero architecto repellat facere magnam!
      </p>
      <p>
        Labore quis adipisci explicabo, iusto consequatur est eligendi ipsa
        totam, fugit nostrum minima! Ipsum cupiditate sequi soluta, unde
        accusantium, expedita excepturi officiis odio eveniet iure earum magni
        odit ratione vitae quidem sit sint pariatur debitis vero provident?
        Dicta id odit cum dignissimos, fugiat voluptatibus modi asperiores illum
        repellendus nobis obcaecati mollitia corporis vitae magni nulla quaerat
        atque exercitationem esse veniam sit excepturi! Debitis delectus ullam
        quisquam cum sit iste dolores et quidem, voluptatibus quas deserunt
        totam accusamus eos, exercitationem ex voluptates. Quidem neque illum
        excepturi totam nesciunt nostrum aspernatur est obcaecati deleniti
        repellat ipsa corrupti praesentium rem at, sint quibusdam, a culpa
        labore? Perferendis alias praesentium rerum similique aut illum totam
        quaerat expedita doloremque temporibus iure dolor quas sit pariatur
        magni non at, cum quisquam, tempora omnis, corrupti autem facere. At
        voluptas fugit ut eum. Rerum nemo atque dolore perspiciatis possimus
        excepturi voluptatem. Officiis delectus dolore, neque modi explicabo
        ipsa aliquid enim saepe placeat perferendis dolor exercitationem nulla
        cumque blanditiis dicta maiores quisquam facilis expedita quia! Debitis
        dolore eum praesentium commodi magnam error repudiandae nihil esse culpa
        exercitationem, accusamus doloribus eos veritatis qui soluta eligendi
        nesciunt voluptatem, alias ea velit unde harum! Molestiae maxime rerum
        nam doloremque iusto, recusandae consequuntur deserunt, ratione nobis
        reiciendis veritatis corrupti quas blanditiis. Molestias ad, et
        voluptatum labore culpa quaerat molestiae sint ratione nihil at
        repudiandae magnam doloribus eius quo nulla eaque, hic adipisci
        exercitationem voluptatem, assumenda facilis! Maiores accusantium quo
        architecto dignissimos, ipsam excepturi quam unde error reprehenderit
        necessitatibus ad harum deleniti placeat reiciendis consectetur dolor
        culpa aliquid facilis nam quos animi odio minus accusamus? Enim alias
        hic quas amet totam suscipit perspiciatis iusto, laborum, architecto
        voluptate quasi inventore recusandae numquam. Quaerat ut ad odio itaque
        temporibus corrupti nobis autem aliquid, quas voluptate rerum quis aut
        quisquam mollitia atque pariatur obcaecati sequi porro doloremque.
      </p>
    </main> 
    </div>
  );
}

export default App;
