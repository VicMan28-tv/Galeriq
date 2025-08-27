import { useState } from "react";

/* =======================
   BRAND
   ======================= */
function Brand() {
  return (
    <div className="flex items-center justify-center gap-2 py-2 md:py-3">
      <svg
        viewBox="0 0 24 24"
        className="w-6 h-6 md:w-7 md:h-7 text-black"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
      <span className="text-2xl md:text-3xl font-semibold">Galeriq</span>
    </div>
  );
}

/* =======================
   TOP BAR (tabs de texto)
   ======================= */
function TopBar({ active, setActive }) {
  const tabs = [
    { id: "home", label: "HOME" },
    { id: "eventos", label: "EVENTOS" },
    { id: "planeacion", label: "PLANEACIÓN" },
    { id: "invitaciones", label: "INVITACIONES" },
    { id: "invitados", label: "INVITADOS" },
    { id: "fotos", label: "FOTOS" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-purple-100/70 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center">
          <Brand />
        </div>
      </div>

      {/* NAV: en móvil es scroll horizontal; en desktop queda centrado igual */}
      <nav className="mx-auto max-w-6xl px-2 md:px-4">
        <ul className="no-scrollbar overflow-x-auto whitespace-nowrap flex items-center justify-start md:justify-center gap-3 md:gap-10 py-2 -mx-2 px-2">
          {tabs.map((t) => {
            const isActive = active === t.id;
            return (
              <li key={t.id} className="flex-none">
                <button
                  onClick={() => setActive(t.id)}
                  className={[
                    "px-3 py-1.5 rounded-full text-[13px] md:text-base font-semibold tracking-wide transition",
                    isActive
                      ? "ring-2 ring-purple-400/80 text-black bg-purple-50"
                      : "text-slate-800 hover:text-black hover:bg-purple-50",
                  ].join(" ")}
                >
                  {t.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

/* =======================
   ASSETS
   ======================= */
const APP_STORE_BADGE =
  "https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg";
const PLAY_STORE_BADGE =
  "https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg";

/* Teléfono mock (más pequeño en móvil, igual en desktop) */
function PhoneMock({ children, className = "" }) {
  return (
    <div
      className={`relative w-[200px] h-[420px] md:w-[240px] md:h-[500px] rounded-[30px] md:rounded-[36px] border-8 border-black bg-white shadow-xl overflow-hidden ${className}`}
    >
      <div className="absolute inset-x-0 top-0 h-6 bg-black/90" />
      <div className="absolute inset-x-0 bottom-0 h-3 bg-black/90" />
      <div className="absolute inset-0 pt-6 pb-3">{children}</div>
    </div>
  );
}

/* =======================
   MÓDULOS
   ======================= */

/* --- HOME (Hero + About) --- */
function ModuleHome() {
  return (
    <div className="anim-in">
      {/* Hero */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-8 md:py-14 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          {/* Texto */}
          <div className="anim-in">
            <div className="bg-purple-200/80 rounded-xl p-5 md:p-8 shadow-sm">
              <h1 className="font-serif text-3xl md:text-5xl leading-tight text-slate-900">
                PLANIFICA, <br className="hidden md:block" /> COMPARTE Y{" "}
                <br className="hidden md:block" />
                RECUERDA TUS <br className="hidden md:block" /> EVENTOS EN UN{" "}
                <br className="hidden md:block" /> SOLO LUGAR
              </h1>
            </div>
            <p className="mt-4 md:mt-5 text-slate-600 text-sm md:text-base">
              Porque tu historia merece una{" "}
              <span className="font-semibold italic">planeación especial</span>
            </p>
            <p className="mt-3 max-w-xl text-slate-700 text-sm md:text-base">
              Galeriq te acompaña en cada paso de tu evento, activa álbumes en
              vivo, y coordina a tus invitados desde una misma App.
            </p>
            <div className="mt-5 md:mt-6 flex flex-wrap items-center gap-4">
              <a
                href="#"
                className="inline-block rounded-full bg-purple-200 text-slate-900 px-5 py-2.5 md:px-6 md:py-3 font-semibold shadow-sm hover:bg-purple-300 transition"
              >
                OBTENER LA APLICACIÓN
              </a>
            </div>
            <div className="mt-4 md:mt-6 flex items-center gap-3 md:gap-4">
              <a href="#" className="h-10 md:h-12">
                <img
                  className="h-10 md:h-12"
                  src={APP_STORE_BADGE}
                  alt="App Store"
                />
              </a>
              <a href="#" className="h-10 md:h-12">
                <img
                  className="h-10 md:h-12"
                  src={PLAY_STORE_BADGE}
                  alt="Google Play"
                />
              </a>
            </div>
          </div>

          {/* Teléfono */}
          <div className="flex justify-center md:justify-end anim-in anim-delay-1">
            <PhoneMock>
              <div className="h-full w-full p-3 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-2 rounded bg-slate-200" />
                  <div className="w-16 h-4 rounded-full bg-purple-200/70 flex items-center justify-center text-[10px] font-semibold text-purple-700">
                    Galeriq
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=800&auto=format&fit=crop"
                    className="h-40 md:h-48 w-full object-cover"
                    alt="boda"
                  />
                  <div className="p-3 text-center">
                    <h3 className="font-serif text-base md:text-lg">
                      Luis & Regina
                    </h3>
                    <p className="text-[10px] md:text-xs text-slate-500">
                      14/02/2025
                    </p>
                  </div>
                </div>
              </div>
            </PhoneMock>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-100 via-purple-200 to-purple-300" />
        <div className="relative mx-auto max-w-6xl px-4 py-10 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          {/* Teléfono izquierda */}
          <div className="flex justify-center md:justify-start order-2 md:order-1 anim-in">
            <PhoneMock>
              <div className="h-full w-full p-4 space-y-3">
                <div className="space-y-2">
                  {[
                    "Checklist",
                    "Control de invitados",
                    "Seguimiento y control de gastos",
                    "Creación de álbumes",
                  ].map((t, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 rounded-lg border border-slate-200 p-3 bg-white/80"
                    >
                      <span className="inline-flex w-5 h-5 rounded ring-2 ring-purple-300 items-center justify-center">
                        ✓
                      </span>
                      <span className="text-[13px]">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </PhoneMock>
          </div>

          {/* Texto derecha */}
          <div className="order-1 md:order-2 anim-in anim-delay-1">
            <h2 className="font-semibold text-2xl md:text-3xl mb-3 md:mb-4">
              Planear un evento no tiene por qué ser complicado.
            </h2>
            <p className="text-slate-700 leading-7 text-sm md:text-base">
              Galeriq es una aplicación intuitiva y sencilla de usar, diseñada
              para ayudarte a mantener todo bajo control. Desde reuniones
              familiares y cumpleaños hasta bodas o encuentros de trabajo,
              podrás centralizar cada detalle en un solo lugar.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

/* --- EVENTOS --- */
function ModuleEventos() {
  return (
    <section className="relative anim-in">
      <div className="mx-auto max-w-6xl px-4 py-8 md:py-10">
        <h2 className="font-serif text-2xl md:text-3xl mb-4 md:mb-6">
          Mis Eventos
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-start">
          {/* Columna izquierda */}
          <div className="bg-white/70 rounded-2xl shadow-sm p-5 md:p-6 border border-purple-100 anim-in">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-purple-500 text-white font-bold flex items-center justify-center mb-3 md:mb-4">
              1
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Crea tu evento
            </h3>

            <button className="w-full rounded-xl bg-purple-200/70 hover:bg-purple-300 transition px-4 py-3 font-semibold flex items-center justify-center gap-2 mb-5">
              <span className="text-xl">＋</span> Crear evento
            </button>

            <ul className="space-y-2 text-slate-700 text-sm md:text-base">
              <li>Nombre</li>
              <li>Fecha</li>
              <li>Portada</li>
              <li>Lugar</li>
            </ul>
          </div>

          {/* Centro: teléfono */}
          <div className="lg:col-span-1 anim-in anim-delay-1">
            <div className="mx-auto w-[280px] md:w-[300px]">
              <div className="rounded-3xl bg-white/70 p-3 shadow-lg">
                <div className="rounded-[28px] border-8 border-black bg-white overflow-hidden">
                  <div className="h-6 bg-black/90" />
                  <div className="p-3 space-y-3">
                    <div className="rounded-xl overflow-hidden border border-slate-200">
                      <img
                        src="https://image-tc.galaxy.tf/wijpeg-3jfi3hil76w0gaodar2ozp81j/weddings-result_wide.jpg?crop=0%2C82%2C1600%2C900&width=2100"
                        alt="portada"
                        className="h-24 md:h-28 w-full object-cover"
                      />
                      <div className="p-3">
                        <p className="text-[11px] md:text-[12px] leading-4 text-white/90 bg-black/60 inline-block px-1 rounded">
                          Nuestra Boda Luis y Mayra
                        </p>
                        <div className="text-[10px] md:text-[11px] text-slate-500 mt-1">
                          31 de agosto de 2025 · Jardines de México
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 p-3">
                      <div className="font-medium mb-1">📄 Descripción</div>
                      <div className="text-[12px] text-slate-600">
                        Nuestra Boda Luis y Mayra
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 p-3">
                      <div className="grid grid-cols-2 gap-2 text-[11px] md:text-[12px]">
                        <div>
                          <div className="font-medium">🆔 ID del evento</div>
                          <div className="text-slate-600">25</div>
                        </div>
                        <div>
                          <div className="font-medium">🕒 Creado</div>
                          <div className="text-slate-600">
                            18/8/2025, 17:01:52
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 p-3">
                      <div className="font-medium mb-1">📍 Dirección</div>
                      <div className="text-[12px] text-slate-600">
                        Jardines de México
                      </div>
                    </div>

                    <div className="pt-2 flex justify-end">
                      <button className="rounded-full bg-purple-600 text-white text-[12px] px-4 py-1.5 shadow">
                        Acciones
                      </button>
                    </div>
                  </div>
                  <div className="h-3 bg-black/90" />
                </div>
              </div>
            </div>
          </div>

          {/* Derecha: mensaje */}
          <div className="bg-purple-200/70 rounded-2xl p-5 md:p-6 flex items-center justify-center anim-in anim-delay-2">
            <p className="text-center text-base md:text-xl font-semibold text-slate-800 max-w-sm leading-7 md:leading-8">
              Estamos contigo en cada idea, cada plan y cada instante, para que
              tus celebraciones sean tan especiales como las imaginas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- PLANEACIÓN (3 secciones) --- */
function ModulePlaneacion() {
  const [sec, setSec] = useState("checklist");

  return (
    <section className="mx-auto max-w-6xl px-4 py-8 md:py-10 anim-in">
      {/* Píldoras secciones: scroll horizontal en móvil */}
      <div className="no-scrollbar overflow-x-auto -mx-2 px-2 mb-4 md:mb-6">
        <div className="flex items-center gap-2 md:gap-3 w-max">
          {[
            { id: "checklist", label: "CHECKLIST" },
            { id: "gastos", label: "GASTOS" },
            { id: "agenda", label: "AGENDA" },
          ].map((t) => {
            const active = sec === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setSec(t.id)}
                className={[
                  "px-3 py-1.5 rounded-full text-[13px] md:text-base font-semibold tracking-wide transition",
                  active
                    ? "ring-2 ring-purple-400/80 text-black bg-purple-50"
                    : "text-slate-800 hover:text-black hover:bg-purple-50",
                ].join(" ")}
              >
                {t.label}
              </button>
            );
          })}
        </div>
      </div>

      {sec === "checklist" && <PlaneaChecklist />}
      {sec === "gastos" && <PlaneaGastos />}
      {sec === "agenda" && <PlaneaAgenda />}
    </section>
  );
}

/* --- CheckList --- */
function PlaneaChecklist() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-start anim-in">
      <div className="lg:col-span-3">
        <div className="flex items-center gap-3 md:gap-4">
          <span className="inline-flex w-9 h-9 md:w-10 md:h-10 rounded-full bg-purple-500 text-white font-bold items-center justify-center">
            2
          </span>
          <h2 className="font-serif text-2xl md:text-3xl">
            Cada detalle, bajo control.
          </h2>
        </div>
      </div>

      <div className="anim-in">
        <div className="mx-auto w-[260px] md:w-[280px]">
          <div className="rounded-[30px] bg-black/90 h-5 w-full mb-2"></div>
          <div className="rounded-[28px] border-8 border-black bg-white overflow-hidden shadow-xl">
            <div className="p-3 space-y-3">
              <div className="text-center font-semibold">Crear tarea</div>
              {[
                ["Checklist", "Banda"],
                ["Título", "Banda"],
                ["Descripción", "Banda"],
                ["Fecha límite", "24 de agosto de 2025"],
                ["Prioridad", ""],
                ["¿Es gasto?", ""],
                ["Budget", ""],
              ].map(([label, value], i) => (
                <div key={i} className="text-[12px]">
                  <div className="text-slate-500 mb-1">▣ {label}</div>
                  <div className="h-8 rounded-lg border border-slate-200 px-2 flex items-center bg-slate-50/60">
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4 md:space-y-6">
        <RoundIcon />
        <div className="rounded-2xl border-2 border-purple-300 bg-white/80 px-5 md:px-6 py-4 md:py-5 shadow-glow anim-in">
          <p className="text-center leading-6 md:leading-7">
            Agrega, edita o elimina tareas <br />
            cuando quieras.
          </p>
        </div>
        <div className="rounded-2xl border-2 border-purple-300 bg-white/80 px-5 md:px-6 py-4 md:py-5 shadow-glow anim-in anim-delay-1">
          <p className="text-center leading-6 md:leading-7">
            Gestiona presupuesto, pendientes y <br /> agenda juntos, para tener
            todo <br /> organizado sin complicaciones.
          </p>
        </div>
      </div>

      <div className="space-y-4 md:space-y-6 anim-in anim-delay-1">
        <RoundBoardIcon />
        <div className="rounded-2xl border-2 border-purple-300 bg-white/80 px-5 md:px-6 py-4 md:py-5 shadow-glow">
          <p className="text-center leading-6 md:leading-7">
            Adapta tu lista a tu estilo de <br /> planificación y monitorea tus{" "}
            <br /> avances.
          </p>
        </div>
      </div>
    </div>
  );
}

/* --- Gastos --- */
function PlaneaGastos() {
  const presupuesto = 100000;
  const gastado = 55000;
  const pct = Math.round((gastado / presupuesto) * 100);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-start anim-in">
      <div className="space-y-5 md:space-y-6">
        <div className="flex items-center gap-3 md:gap-4">
          <span className="inline-flex w-9 h-9 md:w-10 md:h-10 rounded-full bg-purple-500 text-white font-bold items-center justify-center">
            3
          </span>
          <h2 className="font-serif text-2xl md:text-3xl">Gastos</h2>
        </div>

        <p className="text-xl md:text-3xl text-slate-800 leading-tight">
          Registra y gestiona los gastos de tu evento de manera efectiva,
          categorizándolos para una mejor organización
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {["Nombre del concepto", "Costo aproximado", "Costo real"].map(
            (t, i) => (
              <div
                key={i}
                className="rounded-2xl bg-slate-100/80 text-slate-700 px-4 py-3 font-semibold"
              >
                {t}
              </div>
            )
          )}
        </div>

        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-2">Recepción</h3>
          <ul className="text-slate-700 space-y-1">
            <li>💠 Alquiler del lugar</li>
            <li>💠 Banquete</li>
            <li>💠 Personal de servicio</li>
          </ul>
        </div>
      </div>

      <div className="rounded-3xl bg-white/80 p-5 md:p-6 shadow-md anim-in anim-delay-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="flex items-center justify-center">
            <div className="donut" style={{ "--pct": pct }}>
              <span className="text-2xl md:text-3xl font-bold">{pct}%</span>
            </div>
          </div>
          <div className="text-slate-800">
            <div className="font-semibold text-center mb-2">Presupuesto</div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[14px] md:text-[15px]">
              <span className="text-slate-600">Presupuesto</span>
              <span className="text-right">
                $
                {presupuesto.toLocaleString("es-MX", {
                  minimumFractionDigits: 2,
                })}
              </span>
              <span className="text-slate-600">Gastado</span>
              <span className="text-right">
                ${gastado.toLocaleString("es-MX", { minimumFractionDigits: 2 })}
              </span>
              <span className="text-slate-600">Recepción</span>
              <span className="text-right">$50,000.00</span>
              <span className="text-slate-600">Música</span>
              <span className="text-right">$5,000.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* --- Agenda --- */
function PlaneaAgenda() {
  const [tab, setTab] = useState("hoy");
  const citas = [
    { hora: "12:00-14:00", titulo: "Ceremonia" },
    { hora: "14:20-15:00", titulo: "Sesión fotográfica" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-start anim-in">
      <div className="space-y-5 md:space-y-6">
        <div className="flex items-center gap-3 md:gap-4">
          <span className="inline-flex w-9 h-9 md:w-10 md:h-10 rounded-full bg-purple-500 text-white font-bold items-center justify-center">
            4
          </span>
          <h2 className="font-serif text-2xl md:text-3xl">Agenda</h2>
        </div>

        <div className="rounded-2xl bg-purple-200/70 px-5 md:px-6 py-5 md:py-6 text-2xl md:text-3xl font-semibold text-slate-800 shadow-glow">
          <span className="italic">Para que cada </span>
          <span className="not-italic font-bold">etapa</span>
          <span className="italic"> sea </span>
          <span className="not-italic font-bold">especial</span>.
        </div>

        <p className="text-base md:text-xl text-slate-700">
          Envía notificaciones y recordatorios a tus invitados durante el
          evento.
        </p>
      </div>

      <div className="anim-in anim-delay-1">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
          {[
            { id: "hoy", label: "Hoy" },
            { id: "evento", label: "Evento" },
            { id: "albumes", label: "Álbumes" },
          ].map((t) => {
            const active = tab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={[
                  "px-3 md:px-4 py-2 rounded-xl border transition text-sm md:text-base",
                  active
                    ? "bg-purple-200/70 border-purple-300 text-purple-900"
                    : "bg-white border-slate-200 text-slate-800 hover:bg-purple-50",
                ].join(" ")}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        <div className="text-purple-700 text-2xl md:text-3xl font-semibold mb-3 md:mb-4">
          Lun., 31 ago
        </div>

        <div className="space-y-3">
          {citas.map((c, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm"
            >
              <CamIcon />
              <div>
                <div className="text-lg md:text-xl font-semibold">
                  {c.titulo}
                </div>
                <div className="text-slate-600 text-sm md:text-base">
                  {c.hora}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* --- INVITACIONES --- */
function ModuleInvitaciones() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 md:py-10 anim-in">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-start">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <HeartSmall />
            <h2 className="font-serif text-2xl md:text-3xl">Invitaciones</h2>
          </div>

          <div className="flex items-end gap-4 md:gap-6 anim-in">
            <PhoneMock className="h-[480px] w-[230px] md:h-[520px] md:w-[250px]">
              <div className="h-full w-full">
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop"
                  alt="Invitación pareja"
                />
                <div className="absolute bottom-24 w-full text-center text-white drop-shadow">
                  <div className="text-xl md:text-2xl font-semibold tracking-wide">
                    MARIANA &<br /> FRANCISCO
                  </div>
                </div>
                <div className="absolute bottom-8 w-full flex justify-center">
                  <div className="px-4 py-2 rounded bg-black/60 text-white text-xs md:text-sm">
                    7 DE SEPTIEMBRE 2024
                  </div>
                </div>
              </div>
            </PhoneMock>

            <PhoneMock className="h-[470px] w-[230px] md:h-[500px] md:w-[250px]">
              <div className="h-full w-full p-3 space-y-3">
                <div className="text-center font-semibold">Galeriq</div>

                <div className="rounded-xl border border-slate-200 overflow-hidden">
                  <div className="h-32 md:h-36 bg-[url('https://images.unsplash.com/photo-1527192491265-7e15c55b1ed4?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
                  <div className="p-3 text-center">
                    <div className="text-[11px] md:text-[12px]">
                      Te invito a mi
                    </div>
                    <div className="font-bold">FIESTA DE CUMPLEAÑOS</div>
                    <div className="text-[11px] md:text-[12px]">Olivia</div>
                    <div className="text-[10px] md:text-[11px] text-slate-500">
                      Sábado, 8 de junio de 2025 · 21:00
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px] md:text-[12px]">
                  <button className="rounded-lg border bg-white border-slate-200 px-2 py-2">
                    🧭 Explorar
                    <br />
                    diseños
                  </button>
                  <button className="rounded-lg border bg-white border-slate-200 px-2 py-2">
                    ✏️ Editar
                  </button>
                  <button className="rounded-lg border bg-white border-slate-200 px-2 py-2">
                    ＋ Crear
                  </button>
                  <button className="rounded-lg border bg-white border-slate-200 px-2 py-2">
                    🔗 Compartir
                    <br />
                    enlace
                  </button>
                </div>

                <button className="mt-1 w-full rounded-full bg-purple-600 text-white py-2 text-[12px] md:text-[13px]">
                  Crear invitación
                </button>
              </div>
            </PhoneMock>
          </div>
        </div>

        <div className="space-y-5 md:space-y-6">
          <div className="flex items-center gap-3 md:gap-4">
            <span className="inline-flex w-9 h-9 md:w-10 md:h-10 rounded-full bg-purple-500 text-white font-bold items-center justify-center">
              5
            </span>
            <h3 className="font-serif text-2xl md:text-3xl">
              Diseña, envía y celebra.
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-4 max-w-md">
            {["EXPLORA", "CREA", "EDITA", "COMPARTE"].map((t) => (
              <button
                key={t}
                className="rounded-full px-5 md:px-6 py-2 font-semibold shadow-glow bg-gradient-to-r from-purple-200 to-purple-300 hover:from-purple-300 hover:to-purple-400 transition text-sm md:text-base"
              >
                {t}
              </button>
            ))}
          </div>

          <p className="text-base md:text-lg leading-7 md:leading-8 text-slate-700 max-w-xl">
            Que tus invitados sientan la magia de tu evento desde el primer
            vistazo a la invitación, despertando emoción y anticipación por cada
            momento que van a compartir contigo.
          </p>
        </div>
      </div>
    </section>
  );
}

/* --- INVITADOS --- */
function ModuleInvitados() {
  const cards = [
    { icon: <PeopleIcon />, text: "Agrega y edita invitados de forma rápida" },
    {
      icon: <FilterIcon />,
      text: "Filtra por estado: Confirmado, Pendiente, Rechazado",
    },
    { icon: <RSVPIcon />, text: "Confirma asistencia en tiempo real (RSVP)" },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-8 md:py-10 anim-in">
      <div className="flex items-center gap-2 mb-4">
        <HeartSmall />
        <h2 className="font-serif text-2xl md:text-3xl">Invitados</h2>
      </div>

      <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
        <span className="inline-flex w-9 h-9 md:w-10 md:h-10 rounded-full bg-purple-600 text-white font-bold items-center justify-center">
          6
        </span>
        <h3 className="font-serif text-2xl md:text-3xl">
          Control sobre tus invitados
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        {cards.map((c, i) => (
          <div
            key={i}
            className="relative anim-in"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="absolute -top-2 left-4 right-4 h-4 rounded-t-2xl bg-gradient-to-r from-purple-300 to-purple-400 opacity-70" />
            <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-md relative">
              <div className="mb-3 md:mb-4">{c.icon}</div>
              <p className="font-semibold text-slate-800 leading-6">{c.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* --- FOTOS --- */
function ModuleFotos() {
  const [likes, setLikes] = useState([true, false, false]);
  const toggle = (idx) =>
    setLikes((arr) => arr.map((v, i) => (i === idx ? !v : v)));

  const images = [
    "https://www.shutterstock.com/image-photo/shot-beautiful-young-woman-making-600nw-2275869457.jpg",
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-8 md:py-10 anim-in">
      <div className="flex items-center gap-2 mb-4">
        <HeartSmall />
        <h2 className="font-serif text-2xl md:text-3xl">Álbumes</h2>
      </div>

      <div className="flex items-center gap-3 md:gap-4 mb-5 md:mb-6">
        <span className="inline-flex w-9 h-9 md:w-10 md:h-10 rounded-full bg-purple-600 text-white font-bold items-center justify-center">
          7
        </span>
        <h3 className="font-serif text-2xl md:text-3xl">
          La magia del momento, guardada para siempre…
        </h3>
      </div>

      <div className="inline-block px-4 py-1 rounded-full bg-purple-200/80 text-purple-900 font-semibold mb-4">
        Interacción en vivo
      </div>

      {/* Grid de imágenes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 items-start">
        {images.map((src, i) => (
          <div
            key={i}
            className="anim-in"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img
                src={src}
                alt={`foto ${i + 1}`}
                className="w-full h-44 md:h-56 object-cover"
              />
              <button
                onClick={() => toggle(i)}
                className={[
                  "absolute top-3 right-3 w-9 h-9 rounded-full grid place-items-center",
                  likes[i] ? "bg-red-500 text-white" : "bg-black/60 text-white",
                ].join(" ")}
                title="Me gusta"
              >
                <HeartSolid />
              </button>
            </div>

            {/* Acciones */}
            <div className="mt-3 flex items-center gap-3">
              <button className="action-btn" title="Compartir">
                <ShareIcon />
              </button>
              <button className="action-btn" title="Descargar">
                <DownloadIcon />
              </button>
            </div>
          </div>
        ))}

        {/* Tarjeta frase */}
        <div className="md:col-span-1 order-first md:order-none">
          <div className="rounded-2xl bg-purple-200/80 p-5 text-center shadow-glow">
            <div className="text-slate-700 text-lg">Lo mejor de</div>
            <div className="text-2xl italic font-semibold text-slate-900">
              la vida
            </div>
            <div className="text-slate-700">siempre se comparte</div>
          </div>
        </div>
      </div>

      <p className="text-base md:text-xl text-slate-700 mt-6 md:mt-8 max-w-4xl">
        Crea álbumes de los momentos más memorables de tu evento y compártelos
        con tus invitados.
      </p>
    </section>
  );
}

/* =======================
   APP
   ======================= */
export default function GaleriqLanding() {
  const [active, setActive] = useState("home");

  return (
    <div className="min-h-screen w-full text-slate-800 bg-purple-50 pb-[calc(env(safe-area-inset-bottom))]">
      <TopBar active={active} setActive={setActive} />

      <div>
        {active === "home" && <ModuleHome />}
        {active === "eventos" && <ModuleEventos />}
        {active === "planeacion" && <ModulePlaneacion />}
        {active === "invitaciones" && <ModuleInvitaciones />}
        {active === "invitados" && <ModuleInvitados />}
        {active === "fotos" && <ModuleFotos />}
      </div>

      <footer className="py-8 md:py-10 text-center text-xs md:text-sm text-slate-500">
        © {new Date().getFullYear()} Galeriq
      </footer>
    </div>
  );
}

/* =======================
   ICONOS / UTILIDADES
   ======================= */
function RoundIcon() {
  return (
    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-purple-300/60 flex items-center justify-center text-purple-900 shadow-glow">
      <svg
        viewBox="0 0 24 24"
        className="w-8 h-8 md:w-9 md:h-9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M4 4h16v16H4z" />
        <path d="M7 8h10M7 12h10M7 16h7" />
      </svg>
    </div>
  );
}
function RoundBoardIcon() {
  return (
    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-purple-300/60 flex items-center justify-center text-purple-900 shadow-glow">
      <svg
        viewBox="0 0 24 24"
        className="w-8 h-8 md:w-9 md:h-9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M4 5h16v14H4z" />
        <circle cx="8" cy="9" r="1" />
        <path d="M10 9h7M8 13h9M8 17h7" />
      </svg>
    </div>
  );
}
function CamIcon() {
  return (
    <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-purple-300/60 flex items-center justify-center text-purple-900">
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5 md:w-6 md:h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M3 7h14v10H3z" />
        <path d="M17 10l4-2v8l-4-2z" />
        <circle cx="9" cy="12" r="2" />
      </svg>
    </div>
  );
}
function HeartSmall() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-5 h-5 md:w-6 md:h-6 text-purple-600"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}
function PeopleIcon() {
  return (
    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-purple-200/80 text-purple-800 grid place-items-center">
      <svg
        viewBox="0 0 24 24"
        className="w-9 h-9 md:w-10 md:h-10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="8" r="3" />
        <path d="M3 20a7 7 0 0 1 18 0" />
      </svg>
    </div>
  );
}
function FilterIcon() {
  return (
    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-purple-200/80 text-purple-800 grid place-items-center">
      <svg
        viewBox="0 0 24 24"
        className="w-9 h-9 md:w-10 md:h-10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M3 6h18M6 12h12M10 18h4" />
      </svg>
    </div>
  );
}
function RSVPIcon() {
  return (
    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-purple-200/80 text-purple-800 grid place-items-center">
      <svg
        viewBox="0 0 24 24"
        className="w-9 h-9 md:w-10 md:h-10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 8h8M8 12h8M8 16h4" />
      </svg>
    </div>
  );
}
function HeartSolid() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M12 21s-6.716-4.764-9.192-7.24C.922 11.873 1.07 8.91 3.05 7.05A5.002 5.002 0 0 1 12 7.122 5.002 5.002 0 0 1 20.95 7.05c1.98 1.86 2.128 4.823.242 6.71C18.716 16.236 12 21 12 21z" />
    </svg>
  );
}
function ShareIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
    </svg>
  );
}
function DownloadIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12 3v12" />
      <path d="M7 10l5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

/* =======================
   ESTILOS / ANIMACIONES + mobile helpers
   ======================= */
const styles = document.createElement("style");
styles.innerHTML = `
@keyframes fadeUp { from { opacity:0; transform: translateY(8px) scale(.98);} to { opacity:1; transform: translateY(0) scale(1);} }
.anim-in { animation: fadeUp .35s ease-out both; }
.anim-delay-1 { animation-delay: .08s; }
.anim-delay-2 { animation-delay: .16s; }
.shadow-glow { box-shadow: 0 8px 24px rgba(112, 26, 117, .15); }

/* HOVER UNIVERSAL: BOTONES */
button, [role="button"], .action-btn, .pill-btn, a.button {
  transition: transform .18s ease, box-shadow .18s ease, filter .18s ease, background-color .18s ease, opacity .18s ease, border-color .18s ease;
  -webkit-tap-highlight-color: transparent;
  will-change: transform, box-shadow, filter;
}
button:hover, [role="button"]:hover, .action-btn:hover, .pill-btn:hover, a.button:hover {
  transform: translateY(-2px) scale(1.015);
  box-shadow: 0 10px 24px rgba(112, 26, 117, .18);
  filter: saturate(1.02);
}
button:active, [role="button"]:active, .action-btn:active, .pill-btn:active, a.button:active {
  transform: translateY(0) scale(.985);
  box-shadow: 0 6px 14px rgba(112, 26, 117, .14);
}
button:focus-visible, [role="button"]:focus-visible, .action-btn:focus-visible, .pill-btn:focus-visible, a.button:focus-visible {
  outline: 2px solid #a78bfa; /* purple-400 */
  outline-offset: 2px;
}

/* HOVER UNIVERSAL: IMÁGENES */
img {
  transition: transform .25s ease, filter .25s ease, box-shadow .25s ease;
  will-change: transform, filter;
}
img:hover {
  transform: translateY(-3px) scale(1.03);
  filter: saturate(1.06) contrast(1.02);
  box-shadow: 0 14px 26px rgba(112, 26, 117, .14);
}
img:active { transform: scale(.99); }

/* Botón de acción pequeño (FOTOS) */
.action-btn{
  border-radius: 9999px;
  padding: .5rem;
  background: rgba(196, 181, 253, .7); /* purple-300/70 */
  transition: transform .18s ease, box-shadow .18s ease, background-color .18s ease;
}
.action-btn:hover{ background: rgba(196, 181, 253, .95); }

/* Donut chart */
.donut{
  --size: 180px;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  display: grid;
  place-items:center;
  background: conic-gradient(#8b5cf6 calc(var(--pct)*1%), #e9d5ff 0);
  -webkit-mask: radial-gradient(circle 70px at center, transparent 55px, #000 56px);
          mask: radial-gradient(circle 70px at center, transparent 55px, #000 56px);
  box-shadow: 0 10px 30px rgba(139,92,246,.25) inset, 0 10px 30px rgba(139,92,246,.15);
  color:#4c1d95;
}

/* Oculta scrollbar en contenedores horizontales (móvil) */
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
`;
document.head.appendChild(styles);
