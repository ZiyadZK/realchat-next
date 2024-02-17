
import MainLayout from "@/components/mainLayout";


export default function Home() {
  return (
    <MainLayout>
      <div className="grid grid-cols-7 w-full md:w-3/4 relative overflow-hidden md:rounded-lg bg-white/5 backdrop-blur">
        <div className="col-span-2 w-full bg-zinc-900/20 backdrop-blur p-5 hidden md:block">
          <div className="grid grid-cols-4 gap-5 h-10">
            <div className="col-span-3 bg-zinc-700/50 rounded animate-pulse"></div>
            <div className="bg-zinc-700/50 rounded animate-pulse"></div>
          </div>
          <hr className="w-full my-3 border-zinc-500/50" />
          <div className="space-y-3 relative overflow-auto h-[500px]">
            <div className="h-10 bg-zinc-700/50 animate-pulse w-full rounded"></div>
            <div className="h-10 bg-zinc-700/50 animate-pulse w-full rounded"></div>
            <div className="h-10 bg-zinc-700/50 animate-pulse w-full rounded"></div>
            <div className="h-10 bg-zinc-700/50 animate-pulse w-full rounded"></div>
          </div>
        </div>
        <div className="col-span-7 md:col-span-5 w-full p-5">
          <div className="w-full h-10 flex items-center justify-between rounded bg-white/10 animate-pulse"></div>
          <hr className="my-3 opacity-0" />
          <div className="h-[500px] flex flex-col justify-between">
            <div className="h-[440px] relative overflow-auto w-full rounded bg-white/10 animate-pulse"></div>
            <div className="h-12 rounded w-full bg-white/10 animate-pulse"></div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

function LoadingSidebar() {
  return (
    <div className="col-span-2 w-full bg-zinc-900/20 backdrop-blur p-5 hidden md:block">
      <div className="grid grid-cols-4 gap-5 h-10">
        <div className="col-span-3 bg-zinc-700/50 rounded animate-pulse"></div>
        <div className="bg-zinc-700/50 rounded animate-pulse"></div>
      </div>
      <hr className="w-full my-3 border-zinc-500/50" />
      <div className="space-y-3 relative overflow-auto h-[500px]">
        <div className="h-10 bg-zinc-700/50 animate-pulse w-full rounded"></div>
        <div className="h-10 bg-zinc-700/50 animate-pulse w-full rounded"></div>
        <div className="h-10 bg-zinc-700/50 animate-pulse w-full rounded"></div>
        <div className="h-10 bg-zinc-700/50 animate-pulse w-full rounded"></div>
      </div>
    </div>
  )
}

function LoadingMainContent() {
  return (
    <div className="col-span-7 md:col-span-5 w-full p-5">
          <div className="w-full h-10 flex items-center justify-between rounded bg-white/10 animate-pulse"></div>
          <hr className="my-3 opacity-0" />
          <div className="h-[500px] flex flex-col justify-between">
            <div className="h-[440px] relative overflow-auto w-full rounded bg-white/10 animate-pulse"></div>
            <div className="h-12 rounded w-full bg-white/10 animate-pulse"></div>
          </div>
        </div>
  )
}
