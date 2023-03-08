// discover by categories Section.
// up collection sections
import Cardsm from "../components/Cardsm";
import Gridsm from "../components/Gridsm";

const Screen3 = () => {
  return (
    <div className="bg-sky-50 py-32 pb-0">
      <div className="w-2/3 mx-auto">
        {/* text display */}
        <div className="text-center mb-12">
          <p className="text-4xl font-bold text-gray-600 ">
            Discover Places By Categories
          </p>
          <p className="text-gray-600 mt-2">Sort your Prefrences</p>
        </div>
        {/* grid */}
        <div className="grid grid-cols-4 gap-10">
          <a
            href="/#"
            className="p-4 bg-white w-60 hover:shadow-lg space-y-5 rounded-lg"
          >
            <img
              className="w-32 h-32 mx-auto rounded-full"
              src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
              alt=""
            />
            <div className="space-y-2 text-center">
              <p className="text-gray-700 text-lg font-semibold mb-3">
                Explore Nature
              </p>
            </div>
          </a>
          {/* created reuseable Component */}
          <Cardsm
            imgUrl="https://www.reneeroaming.com/wp-content/uploads/2021/09/Must-Know-Night-Hiking-Tips-How-To-Hike-for-Sunrise-and-Sunset.jpg"
            text="Hike"
          />
          <Cardsm
            imgUrl="https://www.pngrepo.com/png/195150/512/mug-coffee.png"
            text="Tea & Coffee"
          />
          <Cardsm
            imgUrl="https://png.pngtree.com/png-vector/20190316/ourmid/pngtree-movie-projector-icon-set-of-great-flat-icons-with-style-long-s-png-image_848559.jpg"
            text="Movie"
          />
          <Cardsm
            imgUrl="https://cdn-icons-png.flaticon.com/512/488/488645.png"
            text="Transport"
          />
          <Cardsm
            imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcoCflkPo59BOmnSn-aIuxao9qhvwFzoZnmojNcdTGJOeSS70mzWuEgivWwHTMYHcrCp8&usqp=CAU"
            text="Home"
          />
          <Cardsm
            imgUrl="https://cdn-icons-png.flaticon.com/512/201/201799.png"
            text="Education"
          />
          <Cardsm
            imgUrl="https://cdn4.iconfinder.com/data/icons/shopping-e-commerce-41/512/shoping-512.png"
            text="Shopping"
          />
        </div>
        <div className="mt-12 text-center mb-10">
          <button className="bg-white py-2.5 px-6 rounded-md border border-gray-100 text-lg shadow hover:shadow-lg text-gray-600">
            Discover More
          </button>
        </div>
      </div>
      {/* collections */}
      <div className="bg-slate-100 py-32">
        <div className="w-8/12 mx-auto">
          <div className="text-center mb-12">
            <p className="text-4xl font-bold text-gray-600 mb-3">Collections</p>
            <p className="text-gray-600">Discover List of Top Fooding Places</p>
          </div>
          <div className="grid grid-cols-4 gap-10">
            <div className="relative w-56 h-64 overflow-hidden shadow-md hover:shadow-lg">
              <img
                className="rounded w-full h-full object-cover shadow"
                src="https://www.indianhealthyrecipes.com/wp-content/uploads/2019/12/drumstick-curry-recipe-500x500.jpg"
                alt="drumstick"
              />
              <div className="bg-gradient-to-t from-black via-transparent inset-0 absolute rounded"></div>
              <div className="absolute bottom-2 left-3  ">
                <p className="text-white text-lg font-semibold">Newly Opened</p>
                <p className="text-white text-sm">21 places</p>
              </div>
            </div>
            <Gridsm
              imgUrl="https://www.kcrw.com/news/shows/greater-la/lunar-new-year-oc/chinese-restaurants/@@images/rectangular_image/page-header?v=1675128782.77"
              num={16}
            />
            <Gridsm
              imgUrl="https://chiyaghar.com/wp-content/uploads/2020/11/banner_2_small.jpg"
              num={21}
            />
            <Gridsm
              imgUrl="https://english.onlinekhabar.com/wp-content/uploads/2019/03/Jhamel-Beats_Jhol-Momo.jpg"
              num={41}
            />
            <Gridsm
              imgUrl="https://media-cdn.tripadvisor.com/media/photo-s/19/6b/dd/13/hotpot-spread.jpg"
              num={7}
            />
            <Gridsm
              imgUrl="https://hips.hearstapps.com/hmg-prod/images/190208-delish-ramen-horizontal-093-1550096715.jpg?crop=1xw:0.843328335832084xh;center,top"
              num={18}
            />
            <Gridsm
              imgUrl="https://www.sidechef.com/recipe/ab616807-69a6-416e-897f-e83964b5a219.jpg?d=1408x1120"
              num={14}
            />
            <Gridsm
              imgUrl="https://cdn-fjknb.nitrocdn.com/sYJEeGkHVBiftWuTfZsKGWIHyaufcHUS/assets/static/optimized/rev-612f1f8/wp-content/uploads/2021/12/angladeshi-Aloo-Chop-Recipe-585x439.jpg"
              num={72}
            />
          </div>
        </div>
        <div className="mt-12 text-center">
          <button className="rounded-md py-2.5 px-6 bg-white border border-gray-100 text-lg shadow hover:shadow-lg text-gray-600">
            More Collections
          </button>
        </div>
      </div>
    </div>
  );
};

export default Screen3;
