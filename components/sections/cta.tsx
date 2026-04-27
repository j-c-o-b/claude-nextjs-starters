import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-2xl bg-primary px-8 py-16 text-center text-primary-foreground">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            지금 바로 시작하세요
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-primary-foreground/80">
            클론하고, 커스터마이징하고, 배포하세요. 설정에 드는 시간을 줄이고
            더 중요한 것에 집중하세요.
          </p>

          <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              variant="secondary"
              asChild
            >
              <Link href="/dashboard">
                대시보드 보기
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                문서 보기
              </Link>
            </Button>
          </div>

          <div className="mx-auto flex max-w-sm flex-col gap-2 sm:flex-row">
            <Input
              type="email"
              placeholder="이메일 주소를 입력하세요"
              className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:ring-primary-foreground/50"
            />
            <Button variant="secondary" className="shrink-0">
              구독하기
            </Button>
          </div>
          <p className="mt-3 text-xs text-primary-foreground/60">
            스팸 메일을 보내지 않습니다. 언제든지 구독 취소 가능합니다.
          </p>
        </div>
      </div>
    </section>
  );
}
