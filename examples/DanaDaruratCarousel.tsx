// Worked usage example: the same "Dana Darurat" IG carousel shipped as
// static PNGs in the brand-os skill's examples/dana-darurat-carousel/,
// rebuilt here as composed components. Not part of the package build
// (see tsup.config.ts entry). This is documentation/preview fodder.
import { SlideCard, Tag, Heading, Text, Icon, Button } from "../src";

export function CoverSlide() {
  return (
    <SlideCard tone="dark" logo="hero" page={1} total={7} carouselAspect>
      <Tag>NYALA · FINANCIAL FITNESS</Tag>
      <Heading level={1}>Dana Darurat Kamu Belum Tentu Cukup.</Heading>
      <Text tone="muted">Cara hitung targetnya yang benar, bukan angka asal-asalan.</Text>
    </SlideCard>
  );
}

export function DefinitionSlide() {
  return (
    <SlideCard tone="light" logo="mark" page={2} total={7} carouselAspect>
      <Icon name="protection" size={64} />
      <Heading level={2}>Dana Darurat ≠ Tabungan Biasa</Heading>
      <Text>
        Dana darurat itu uang yang harus bisa cair instan pas kondisi darurat: kena PHK, sakit
        mendadak, atau kendaraan rusak. Bukan buat liburan, bukan buat DP cicilan baru.
      </Text>
    </SlideCard>
  );
}

export function TargetsSlide() {
  const rows: [string, string][] = [
    ["Single, gaji tetap", "3× pengeluaran bulanan"],
    ["Menikah, belum punya anak", "6× pengeluaran bulanan"],
    ["Punya anak / penghasilan nggak tetap", "9-12× pengeluaran bulanan"],
  ];
  return (
    <SlideCard tone="offwhite" logo="mark" page={3} total={7} carouselAspect>
      <Icon name="goal" size={64} />
      <Heading level={2}>Berapa Target yang Benar?</Heading>
      {rows.map(([label, value]) => (
        <div key={label}>
          <Text tone="muted">{label}</Text>
          <Heading level={3} className="ocbc-heading--accent">
            {value}
          </Heading>
        </div>
      ))}
    </SlideCard>
  );
}

export function ObjectionSlide() {
  return (
    <SlideCard tone="dark" logo="mark" page={4} total={7} carouselAspect>
      <Heading level={2}>&ldquo;Gaji Pas-Pasan, Gimana Bisa Nabung?&rdquo;</Heading>
      <Text tone="inverse">
        Bukan soal sisa gaji, tapi soal urutan. Sisihkan dulu di awal gajian, baru pengeluaran lain
        menyesuaikan sisanya. Mulai dari 5% bulan ini lebih baik daripada nunggu &ldquo;gaji naik
        dulu.&rdquo;
      </Text>
    </SlideCard>
  );
}

export function Step1Slide() {
  return (
    <SlideCard tone="light" logo="mark" page={5} total={7} carouselAspect>
      <Icon name="wallet" size={64} />
      <Heading level={3}>Langkah 1: Pisahkan Rekeningnya</Heading>
      <Text>
        Taruh dana darurat di rekening terpisah dari rekening harian, biar nggak kepakai buat
        checkout tengah malam. Pilih yang tetap likuid (cair 1×24 jam), tapi nggak ada kartu debit
        buat belanja harian.
      </Text>
    </SlideCard>
  );
}

export function Step2Slide() {
  return (
    <SlideCard tone="offwhite" logo="mark" page={6} total={7} carouselAspect>
      <Icon name="growth" size={64} />
      <Heading level={3}>Langkah 2: Otomatiskan dari Hari Gajian</Heading>
      <Text>
        Set auto-transfer di tanggal gajian, bukan di &ldquo;sisa akhir bulan.&rdquo; Kalau nunggu
        sisa, hampir pasti nggak ada yang tersisa.
      </Text>
    </SlideCard>
  );
}

export function CtaSlide() {
  return (
    <SlideCard tone="red" logo="mark" page={7} total={7} carouselAspect>
      <Heading level={2} style={{ color: "var(--ocbc-white)" }}>
        Target Udah Jelas. Sekarang Hitung Punya Kamu.
      </Heading>
      <Text tone="inverse">
        Financial Fitness Class dari Ruang meNyala bahas cara hitung dana darurat sesuai kondisi
        kamu masing-masing, bukan template generik.
      </Text>
      <Button variant="onRed">ruangmenyala.com</Button>
    </SlideCard>
  );
}

export function DanaDaruratCarousel() {
  return (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <CoverSlide />
      <DefinitionSlide />
      <TargetsSlide />
      <ObjectionSlide />
      <Step1Slide />
      <Step2Slide />
      <CtaSlide />
    </div>
  );
}
