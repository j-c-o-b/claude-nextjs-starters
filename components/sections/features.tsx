import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Zap,
  Palette,
  LayoutDashboard,
  Shield,
  Blocks,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "빠른 개발 속도",
    description:
      "Next.js App Router와 React Server Components로 최적화된 성능을 즉시 누리세요.",
  },
  {
    icon: Palette,
    title: "다크/라이트 모드",
    description:
      "OKLCH 색상 시스템 기반의 완벽한 다크모드. CSS 변수로 손쉽게 테마를 커스터마이징할 수 있습니다.",
  },
  {
    icon: LayoutDashboard,
    title: "대시보드 레이아웃",
    description:
      "사이드바 네비게이션과 반응형 대시보드 레이아웃이 이미 구성되어 있습니다.",
  },
  {
    icon: Shield,
    title: "타입 안정성",
    description:
      "TypeScript로 전체 코드베이스를 커버. 런타임 오류를 컴파일 타임에 잡아냅니다.",
  },
  {
    icon: Blocks,
    title: "컴포넌트 시스템",
    description:
      "shadcn/ui의 접근성 높은 컴포넌트와 lucide-react 아이콘으로 일관된 UI를 빠르게 구성하세요.",
  },
  {
    icon: Globe,
    title: "배포 최적화",
    description:
      "Vercel에 즉시 배포 가능. 정적 생성, 서버 렌더링, 엣지 런타임을 자유롭게 선택하세요.",
  },
];

export function Features() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-16 text-center">
          <Badge variant="secondary" className="mb-4">
            기능
          </Badge>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            개발에만 집중할 수 있도록
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            반복적인 설정 작업 없이 핵심 기능 개발에 바로 뛰어들 수 있는 모든
            것이 준비되어 있습니다.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="border-border/50 transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold">{feature.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
