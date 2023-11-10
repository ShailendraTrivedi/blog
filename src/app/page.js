import CardList from "@/pages/cardList/page";
import CategoryList from "@/pages/categoryList/page";
import Features from "@/pages/features/page";
import Pagination from "@/pages/pagination/page";

export default function Home() {
  return (
    <main className="space-y-10">
      <Features />
      <CategoryList />
      <div className="grid sm:grid-cols-3 gap-5 grid-cols-1">
        <div className="col-span-2">
          <Pagination />
        </div>
        <CardList />
      </div>
    </main>
  );
}
