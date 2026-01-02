<!DOCTYPE html>

<html class="light" lang="es">

<head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>Moda Minimalista - Iniciar Sesión</title>
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com" rel="preconnect" />
    <link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect" />
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200..800&amp;display=swap"
        rel="stylesheet" />
    <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
        rel="stylesheet" />
    <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
        rel="stylesheet" />
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#ec13a4",
                        "primary-dark": "#c00f85",
                        "background-light": "#f8f6f7",
                        "background-dark": "#22101c",
                        "surface-light": "#ffffff",
                        "surface-dark": "#2d1b26",
                        "text-main": "#1b0d17",
                        "text-muted": "#9a4c80",
                        "border-color": "#e7cfdf"
                    },
                    fontFamily: {
                        "display": ["Plus Jakarta Sans", "sans-serif"]
                    },
                    borderRadius: { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px" },
                },
            },
        }
    </script>
</head>

<body
    class="bg-background-light dark:bg-background-dark font-display text-text-main antialiased selection:bg-primary selection:text-white">
    <div class="flex min-h-screen w-full flex-row overflow-hidden">
        <!-- Left Side: Editorial Image -->
        <div class="relative hidden w-1/2 lg:flex flex-col justify-between p-12 overflow-hidden bg-text-main group">
            <div class="absolute inset-0 z-0">
                <img alt="Minimalist fashion model posing in neutral coat"
                    class="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                    data-alt="Fashion model in minimal coat walking in a studio setting with neutral background"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJpzFaOYBxp-JbXUWXGwb8EvMOWGgSvLQBGAd-6VpGvMORV_l2ccGdZ3D7UJAR2p2-v-IbTHikycu9wnfi8dnP0AAZGySrkyFweePddu4zkGUdfnQP7QPZpts-veLqUrRXldzWrR9cBcofYSqAqcwJLP5hriPoNgRD1Q-dJdzru5DvneC_keJP-DdOg6tMO6E5o3tFEyo6nWScE8IXJ63RqW70hNj59Cv5VwDKak8Cd2fABlJSfMU1OoOtHkb5wMDYQMWj97cIIURn" />
                <div class="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent">
                </div>
            </div>
            <div class="relative z-10">
                <!-- Logo on Image side -->
                <div class="flex items-center gap-3 text-white">
                    <div class="size-8">
                        <svg fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_logo)">
                                <path clip-rule="evenodd"
                                    d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
                                    fill="currentColor" fill-rule="evenodd"></path>
                            </g>
                            <defs>
                                <clippath id="clip0_logo">
                                    <rect fill="white" height="48" width="48"></rect>
                                </clippath>
                            </defs>
                        </svg>
                    </div>
                    <h1 class="text-xl font-bold tracking-tight">Moda Minimalista</h1>
                </div>
            </div>
            <div class="relative z-10 max-w-md">
                <blockquote class="text-2xl font-medium text-white leading-relaxed">
                    "La simplicidad es la clave de la verdadera elegancia."
                </blockquote>
                <p class="mt-4 text-white/80 text-sm font-medium">— Coco Chanel</p>
            </div>
        </div>
        <!-- Right Side: Login Form -->
        <div
            class="flex w-full lg:w-1/2 flex-col justify-center items-center bg-background-light dark:bg-background-dark p-6 sm:p-12 md:p-20 relative">
            <!-- Mobile Header Logo (Visible only on small screens) -->
            <div class="lg:hidden absolute top-6 left-6 flex items-center gap-2 text-text-main dark:text-white mb-8">
                <div class="size-6 text-primary">
                    <svg fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_logo_mobile)">
                            <path clip-rule="evenodd"
                                d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
                                fill="currentColor" fill-rule="evenodd"></path>
                        </g>
                        <defs>
                            <clippath id="clip0_logo_mobile">
                                <rect fill="white" height="48" width="48"></rect>
                            </clippath>
                        </defs>
                    </svg>
                </div>
                <span class="font-bold text-lg">Moda Minimalista</span>
            </div>
            <div class="w-full max-w-[420px] flex flex-col gap-8">
                <!-- Heading -->
                <div class="flex flex-col gap-2">
                    <h2
                        class="text-text-main dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">
                        Bienvenido de nuevo
                    </h2>
                    <p class="text-text-muted text-base font-normal">
                        Ingresa tus credenciales para acceder a tu cuenta.
                    </p>
                </div>
                <!-- Form -->
                <form action="#" class="flex flex-col gap-5" method="POST">
                    <!-- Email Field -->
                    <label class="flex flex-col w-full">
                        <p class="text-text-main dark:text-white text-sm font-semibold leading-normal pb-2">Correo
                            electrónico</p>
                        <input
                            class="form-input w-full resize-none rounded-lg border border-border-color bg-surface-light dark:bg-surface-dark focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 text-base text-text-main dark:text-white placeholder:text-text-muted outline-none transition-all"
                            placeholder="nombre@ejemplo.com" type="email" />
                    </label>
                    <!-- Password Field -->
                    <label class="flex flex-col w-full">
                        <div class="flex justify-between items-center pb-2">
                            <p class="text-text-main dark:text-white text-sm font-semibold leading-normal">Contraseña
                            </p>
                        </div>
                        <div class="relative w-full">
                            <input
                                class="form-input w-full resize-none rounded-lg border border-border-color bg-surface-light dark:bg-surface-dark focus:border-primary focus:ring-1 focus:ring-primary h-12 pl-4 pr-12 text-base text-text-main dark:text-white placeholder:text-text-muted outline-none transition-all"
                                placeholder="••••••••" type="password" />
                            <button
                                class="absolute right-0 top-0 h-full px-4 flex items-center justify-center text-text-muted hover:text-primary transition-colors"
                                type="button">
                                <span class="material-symbols-outlined text-[20px]">visibility_off</span>
                            </button>
                        </div>
                    </label>
                    <!-- Checkbox & Forgot Password -->
                    <div class="flex items-center justify-between">
                        <label class="flex items-center gap-2 cursor-pointer group">
                            <div class="relative flex items-center">
                                <input
                                    class="peer h-4 w-4 cursor-pointer rounded border-border-color border-2 bg-transparent text-primary checked:bg-primary checked:border-primary focus:ring-0 focus:ring-offset-0 transition-all"
                                    type="checkbox" />
                                <svg class="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
                                    fill="none" height="8" viewbox="0 0 10 8" width="10"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 1L3.5 6.5L1 4" stroke="currentColor" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="2"></path>
                                </svg>
                            </div>
                            <span
                                class="text-text-main dark:text-gray-300 text-sm font-medium group-hover:text-primary transition-colors">Recordarme</span>
                        </label>
                        <a class="text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                            href="#">
                            ¿Olvidaste tu contraseña?
                        </a>
                    </div>
                    <!-- Submit Button -->
                    <button
                        class="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-primary hover:bg-primary-dark text-white text-sm font-bold leading-normal tracking-[0.015em] transition-all shadow-lg shadow-primary/20">
                        <span class="truncate">Iniciar Sesión</span>
                    </button>
                </form>
                <!-- Divider -->
                <div class="relative flex py-2 items-center">
                    <div class="flex-grow border-t border-border-color"></div>
                    <span class="flex-shrink-0 mx-4 text-text-muted text-xs font-medium uppercase tracking-wider">O
                        continúa con</span>
                    <div class="flex-grow border-t border-border-color"></div>
                </div>
                <!-- Social Login -->
                <div class="grid grid-cols-2 gap-3">
                    <button
                        class="flex h-12 items-center justify-center gap-2 rounded-lg border border-border-color bg-surface-light dark:bg-surface-dark hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        <img alt="Google Logo" class="w-5 h-5" data-alt="Google G logo icon"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjmJ5S6MVIyIlTy-iPP1oNrOGStx7Mg4oWnNQhaf7qLs_Sa1lYvshtj1AN5KGHHSwK8T182Qs7PVGvZNWdKJDpGmSgloiX4g0_0xeUSHN9K1Sf4fVkEqBLhl0YqQX7hme-bjSMLSKWkel4nVQu9QaZUGoxPAPV05rhdd5sq6EA52rMme6V9JbZCV6gtbpzoMO-0JFsrzYvP58HAMuJC3FYD6hh6klzvywucm1NDdoiqBL16DZjsSckxmNhuExtFlF5G--fnX3KGf0b" />
                        <span class="text-sm font-semibold text-text-main dark:text-white">Google</span>
                    </button>
                    <button
                        class="flex h-12 items-center justify-center gap-2 rounded-lg border border-border-color bg-surface-light dark:bg-surface-dark hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        <span class="material-symbols-outlined text-[22px] text-text-main dark:text-white">ios</span>
                        <span class="text-sm font-semibold text-text-main dark:text-white">Apple</span>
                    </button>
                </div>
                <!-- Sign Up Footer -->
                <div class="flex justify-center gap-1 mt-2">
                    <p class="text-text-muted text-sm">¿No tienes una cuenta?</p>
                    <a class="text-primary hover:text-primary-dark text-sm font-bold transition-colors"
                        href="#">Registrarse</a>
                </div>
            </div>
            <!-- Bottom Helper Links -->
            <div class="absolute bottom-6 flex gap-6 text-xs text-text-muted">
                <a class="hover:text-text-main transition-colors" href="#">Ayuda</a>
                <a class="hover:text-text-main transition-colors" href="#">Privacidad</a>
                <a class="hover:text-text-main transition-colors" href="#">Términos</a>
            </div>
        </div>
    </div>
</body>

</html>