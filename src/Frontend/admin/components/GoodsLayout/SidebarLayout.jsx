export const components = [
    {
        id: 1,
        imgSrc: "/assets/svg/spares/cpu.svg",
        title: "Процессор",
        description: "AMD Ryzen 5 3600 3600 МГц",
        key: "cpu",
        data: {
            intel: {
                name: 'intel',
                data: [
                    {
                        id: 1,
                        name: "Intel",
                        model: "Intel Core i5-12600K",
                        image: "cpu_images/intel_core_i5.png",
                        brand: "Intel",
                        cores: 6,
                        clockSpeed: 3.7,
                        cache: 20,
                        socket: "LGA1700",
                        price: 7000
                    },
                    {
                        id: 2,
                        name: "Intel",
                        model: "Intel Core i7-12700K",
                        image: "cpu_images/intel_core_i7.png",
                        brand: "Intel",
                        cores: 8,
                        clockSpeed: 3.6,
                        cache: 25,
                        socket: "LGA1700"
                    }
                ]
            },
            ryzen: {
                data: [
                    {
                        id: 1,
                        name: "AMD",
                        model: "AMD Ryzen 5 5600X",
                        image: "cpu_images/amd_ryzen_5.png",
                        brand: "AMD",
                        cores: 6,
                        clockSpeed: 3.7,
                        cache: 32,
                        socket: "AM4",
                        price: 7000
                    },
                    {
                        id: 2,
                        name: "AMD",
                        model: "AMD Ryzen 7 5800X",
                        image: "cpu_images/amd_ryzen_7.png",
                        brand: "AMD",
                        cores: 8,
                        clockSpeed: 3.8,
                        cache: 36,
                        socket: "AM4"
                    }
                ],
                name: 'ryzen'
            }
        }
    },
    {
        id: 2,
        imgSrc: "/assets/svg/spares/cooler.svg",
        title: "Охлаждение",
        description: "AMD Original TM",
        key: "cooling",
        data: {
            air: {
                data: [
                    {
                        id: 1,
                        name: "Cooler Master",
                        model: "Hyper 212 RGB",
                        image: "cooling_images/cooler_master_hyper_212.png",
                        brand: "Cooler Master",
                        type: "Air",
                        fanSize: 120, // мм
                        noiseLevel: 26, // дБ
                        compatibility: ["Intel LGA1700", "AMD AM4"],
                        price: 2500
                    },
                    {
                        id: 2,
                        name: "Noctua",
                        model: "NH-D15",
                        image: "cooling_images/noctua_nh_d15.png",
                        brand: "Noctua",
                        type: "Air",
                        fanSize: 140, // мм
                        noiseLevel: 24.6, // дБ
                        compatibility: ["Intel LGA1151", "AMD AM4"]
                    }
                ], name: "Воздушное охлаждение"
            },
            liquid: {
                data: [
                    {
                        id: 1,
                        name: "Corsair",
                        model: "H100i RGB Platinum",
                        image: "cooling_images/corsair_h100i.png",
                        brand: "Corsair",
                        type: "Liquid",
                        radiatorSize: 240, // мм
                        noiseLevel: 37, // дБ
                        compatibility: ["Intel LGA1700", "AMD AM4"],
                        price: 8500
                    },
                    {
                        id: 2,
                        name: "NZXT",
                        model: "Kraken X53",
                        image: "cooling_images/nzxt_kraken_x53.png",
                        brand: "NZXT",
                        type: "Liquid",
                        radiatorSize: 240, // мм
                        noiseLevel: 21, // дБ
                        compatibility: ["Intel LGA1200", "AMD AM4"]
                    }
                ], name: "Жидкостное охлаждение"
            },
            passive: {
                data: [
                    {
                        id: 1,
                        name: "Noctua",
                        model: "NH-P1",
                        image: "cooling_images/noctua_nh_p1.png",
                        brand: "Noctua",
                        type: "Passive",
                        coolingPower: 100, // Вт
                        compatibility: ["Intel LGA1200", "AMD AM4"],
                        price: 6000
                    }
                ], name: "Пассивное охлаждение"
            }
        }
    },
    {
        id: 3,
        imgSrc: "/assets/svg/spares/gigabyte.svg",
        title: "Материнская плата",
        description: "Gigabyte A520M",
        key: "motherboard",
        data: {
            gigabyte: {
                data: [
                    {
                        id: 1,
                        name: "Gigabyte",
                        model: "Z790 AORUS Master",
                        image: "motherboard_images/gigabyte_z790_aorus_master.png",
                        brand: "Gigabyte",
                        socket: "LGA 1700",
                        chipset: "Intel Z790",
                        formFactor: "ATX",
                        ramSlots: 4,
                        maxRam: 128, // ГБ
                        pciExpressSlots: ["PCIe 5.0 x16", "PCIe 4.0 x4"],
                        storageOptions: ["M.2", "SATA 6Gb/s"],
                        price: 35000
                    },
                    {
                        id: 2,
                        name: "Gigabyte",
                        model: "B550 AORUS Elite V2",
                        image: "motherboard_images/gigabyte_b550_aorus_elite_v2.png",
                        brand: "Gigabyte",
                        socket: "AM4",
                        chipset: "AMD B550",
                        formFactor: "ATX",
                        ramSlots: 4,
                        maxRam: 128, // ГБ
                        pciExpressSlots: ["PCIe 4.0 x16", "PCIe 3.0 x1"],
                        storageOptions: ["M.2", "SATA 6Gb/s"],
                        price: 15000
                    }
                ],
                name: "Gigabyte"
            },
            asus: {
                data: [
                    {
                        id: 1,
                        name: "ASUS",
                        model: "ROG Strix Z690-E Gaming",
                        image: "motherboard_images/asus_rog_strix_z690_e_gaming.png",
                        brand: "ASUS",
                        socket: "LGA 1700",
                        chipset: "Intel Z690",
                        formFactor: "ATX",
                        ramSlots: 4,
                        maxRam: 128, // ГБ
                        pciExpressSlots: ["PCIe 5.0 x16", "PCIe 4.0 x4"],
                        storageOptions: ["M.2", "SATA 6Gb/s"],
                        price: 40000
                    },
                    {
                        id: 2,
                        name: "ASUS",
                        model: "TUF Gaming B550-PLUS",
                        image: "motherboard_images/asus_tuf_gaming_b550_plus.png",
                        brand: "ASUS",
                        socket: "AM4",
                        chipset: "AMD B550",
                        formFactor: "ATX",
                        ramSlots: 4,
                        maxRam: 128, // ГБ
                        pciExpressSlots: ["PCIe 4.0 x16", "PCIe 3.0 x1"],
                        storageOptions: ["M.2", "SATA 6Gb/s"],
                        price: 16000
                    }
                ],
                name: "ASUS"
            },
            msi: {
                data: [
                    {
                        id: 1,
                        name: "MSI",
                        model: "MPG Z690 Carbon WiFi",
                        image: "motherboard_images/msi_mpg_z690_carbon_wifi.png",
                        brand: "MSI",
                        socket: "LGA 1700",
                        chipset: "Intel Z690",
                        formFactor: "ATX",
                        ramSlots: 4,
                        maxRam: 128, // ГБ
                        pciExpressSlots: ["PCIe 5.0 x16", "PCIe 4.0 x4"],
                        storageOptions: ["M.2", "SATA 6Gb/s"],
                        price: 32000
                    },
                    {
                        id: 2,
                        name: "MSI",
                        model: "MAG B550 Tomahawk",
                        image: "motherboard_images/msi_mag_b550_tomahawk.png",
                        brand: "MSI",
                        socket: "AM4",
                        chipset: "AMD B550",
                        formFactor: "ATX",
                        ramSlots: 4,
                        maxRam: 128, // ГБ
                        pciExpressSlots: ["PCIe 4.0 x16", "PCIe 3.0 x1"],
                        storageOptions: ["M.2", "SATA 6Gb/s"],
                        price: 14000
                    }
                ],
                name: "MSI"
            }
        }

    },
    {
        id: 4,
        imgSrc: "/assets/svg/spares/pamiat.svg",
        title: "Оперативная память",
        description: "8Гб DDR4 3000 МГц",
        key: "ram",
        data: {
            corsair: {
                data: [
                    {
                        id: 1,
                        name: "Corsair",
                        model: "Vengeance LPX 16GB",
                        image: "ram_images/corsair_vengeance_lpx_16gb.png",
                        brand: "Corsair",
                        type: "DDR4",
                        capacity: 16, // ГБ
                        speed: 3200, // МГц
                        latency: "CL16",
                        formFactor: "DIMM",
                        voltage: 1.35, // В
                        price: 6000
                    },
                    {
                        id: 2,
                        name: "Corsair",
                        model: "Vengeance RGB Pro 32GB",
                        image: "ram_images/corsair_vengeance_rgb_pro_32gb.png",
                        brand: "Corsair",
                        type: "DDR4",
                        capacity: 32, // ГБ
                        speed: 3600, // МГц
                        latency: "CL18",
                        formFactor: "DIMM",
                        voltage: 1.35, // В
                        price: 12000
                    }
                ],
                name: "Corsair"
            },
            gskill: {
                data: [
                    {
                        id: 1,
                        name: "G.Skill",
                        model: "Ripjaws V 16GB",
                        image: "ram_images/gskill_ripjaws_v_16gb.png",
                        brand: "G.Skill",
                        type: "DDR4",
                        capacity: 16, // ГБ
                        speed: 3200, // МГц
                        latency: "CL16",
                        formFactor: "DIMM",
                        voltage: 1.35, // В
                        price: 6500
                    },
                    {
                        id: 2,
                        name: "G.Skill",
                        model: "Trident Z RGB 32GB",
                        image: "ram_images/gskill_trident_z_rgb_32gb.png",
                        brand: "G.Skill",
                        type: "DDR4",
                        capacity: 32, // ГБ
                        speed: 3600, // МГц
                        latency: "CL16",
                        formFactor: "DIMM",
                        voltage: 1.35, // В
                        price: 13000
                    }
                ],
                name: "G.Skill"
            },
            kingston: {
                data: [
                    {
                        id: 1,
                        name: "Kingston",
                        model: "HyperX Fury 16GB",
                        image: "ram_images/kingston_hyperx_fury_16gb.png",
                        brand: "Kingston",
                        type: "DDR4",
                        capacity: 16, // ГБ
                        speed: 2666, // МГц
                        latency: "CL15",
                        formFactor: "DIMM",
                        voltage: 1.2, // В
                        price: 5500
                    },
                    {
                        id: 2,
                        name: "Kingston",
                        model: "Predator RGB 32GB",
                        image: "ram_images/kingston_predator_rgb_32gb.png",
                        brand: "Kingston",
                        type: "DDR4",
                        capacity: 32, // ГБ
                        speed: 3200, // МГц
                        latency: "CL16",
                        formFactor: "DIMM",
                        voltage: 1.35, // В
                        price: 14000
                    }
                ],
                name: "Kingston"
            }
        }

    },
    {
        id: 5,
        imgSrc: "/assets/svg/spares/graphic.svg",
        title: "Видеокарта",
        description: "GEFORCE GT 1030 2Гб",
        key: "gpu",
        data: {
            nvidia: {
                data: [
                    {
                        id: 1,
                        name: "NVIDIA",
                        model: "GeForce RTX 3080",
                        image: "gpu_images/nvidia_geforce_rtx_3080.png",
                        brand: "NVIDIA",
                        memory: 10, // ГБ
                        memoryType: "GDDR6X",
                        coreClock: 1440, // МГц
                        boostClock: 1710, // МГц
                        cudaCores: 8704,
                        tdp: 320, // Вт
                        price: 80000
                    },
                    {
                        id: 2,
                        name: "NVIDIA",
                        model: "GeForce RTX 3070",
                        image: "gpu_images/nvidia_geforce_rtx_3070.png",
                        brand: "NVIDIA",
                        memory: 8, // ГБ
                        memoryType: "GDDR6",
                        coreClock: 1500, // МГц
                        boostClock: 1730, // МГц
                        cudaCores: 5888,
                        tdp: 220, // Вт
                        price: 60000
                    }
                ],
                name: "NVIDIA"
            },
            amd: {
                data: [
                    {
                        id: 1,
                        name: "AMD",
                        model: "Radeon RX 6800 XT",
                        image: "gpu_images/amd_radeon_rx_6800_xt.png",
                        brand: "AMD",
                        memory: 16, // ГБ
                        memoryType: "GDDR6",
                        coreClock: 1825, // МГц
                        boostClock: 2015, // МГц
                        streamProcessors: 4608,
                        tdp: 300, // Вт
                        price: 75000
                    },
                    {
                        id: 2,
                        name: "AMD",
                        model: "Radeon RX 6700 XT",
                        image: "gpu_images/amd_radeon_rx_6700_xt.png",
                        brand: "AMD",
                        memory: 12, // ГБ
                        memoryType: "GDDR6",
                        coreClock: 2321, // МГц
                        boostClock: 2581, // МГц
                        streamProcessors: 2560,
                        tdp: 230, // Вт
                        price: 50000
                    }
                ],
                name: "AMD"
            },
            msi: {
                data: [
                    {
                        id: 1,
                        name: "MSI",
                        model: "GeForce RTX 3090 Gaming X Trio",
                        image: "gpu_images/msi_geforce_rtx_3090_gaming_x_trio.png",
                        brand: "MSI",
                        memory: 24, // ГБ
                        memoryType: "GDDR6X",
                        coreClock: 1400, // МГц
                        boostClock: 1860, // МГц
                        cudaCores: 10496,
                        tdp: 350, // Вт
                        price: 120000
                    },
                    {
                        id: 2,
                        name: "MSI",
                        model: "Radeon RX 6900 XT Gaming X",
                        image: "gpu_images/msi_radeon_rx_6900_xt_gaming_x.png",
                        brand: "MSI",
                        memory: 16, // ГБ
                        memoryType: "GDDR6",
                        coreClock: 2015, // МГц
                        boostClock: 2250, // МГц
                        streamProcessors: 5120,
                        tdp: 300, // Вт
                        price: 95000
                    }
                ],
                name: "MSI"
            }
        }

    },
    {
        id: 6,
        imgSrc: "/assets/svg/spares/hardDrive.svg",
        title: "Жёсткий диск",
        description: "",
        key: "hdd",
        data: {
            seagate: {
                data: [
                    {
                        id: 1,
                        name: "Seagate",
                        model: "Barracuda 2TB",
                        image: "hdd_images/seagate_barracuda_2tb.png",
                        brand: "Seagate",
                        type: "HDD",
                        capacity: 2000, // ГБ
                        rpm: 7200, // об/мин
                        cache: 256, // МБ
                        interface: "SATA III",
                        price: 4000
                    },
                    {
                        id: 2,
                        name: "Seagate",
                        model: "IronWolf 4TB",
                        image: "hdd_images/seagate_ironwolf_4tb.png",
                        brand: "Seagate",
                        type: "HDD",
                        capacity: 4000, // ГБ
                        rpm: 5900, // об/мин
                        cache: 256, // МБ
                        interface: "SATA III",
                        price: 8000
                    }
                ],
                name: "Seagate"
            },
            westernDigital: {
                data: [
                    {
                        id: 1,
                        name: "Western Digital",
                        model: "WD Blue 1TB",
                        image: "hdd_images/wd_blue_1tb.png",
                        brand: "Western Digital",
                        type: "HDD",
                        capacity: 1000, // ГБ
                        rpm: 7200, // об/мин
                        cache: 64, // МБ
                        interface: "SATA III",
                        price: 3000
                    },
                    {
                        id: 2,
                        name: "Western Digital",
                        model: "WD Black 6TB",
                        image: "hdd_images/wd_black_6tb.png",
                        brand: "Western Digital",
                        type: "HDD",
                        capacity: 6000, // ГБ
                        rpm: 7200, // об/мин
                        cache: 256, // МБ
                        interface: "SATA III",
                        price: 12000
                    }
                ],
                name: "Western Digital"
            },
            samsung: {
                data: [
                    {
                        id: 1,
                        name: "Samsung",
                        model: "860 EVO 500GB",
                        image: "hdd_images/samsung_860_evo_500gb.png",
                        brand: "Samsung",
                        type: "SSD",
                        capacity: 500, // ГБ
                        readSpeed: 550, // МБ/с
                        writeSpeed: 520, // МБ/с
                        interface: "SATA III",
                        price: 4500
                    },
                    {
                        id: 2,
                        name: "Samsung",
                        model: "970 EVO Plus 1TB",
                        image: "hdd_images/samsung_970_evo_plus_1tb.png",
                        brand: "Samsung",
                        type: "SSD",
                        capacity: 1000, // ГБ
                        readSpeed: 3500, // МБ/с
                        writeSpeed: 3300, // МБ/с
                        interface: "NVMe",
                        price: 9000
                    }
                ],
                name: "Samsung"
            }
        }

    },
    {
        id: 7,
        imgSrc: "/assets/svg/spares/hewlett.svg",
        title: "SSD диск 1",
        description: "480 Гб Hewlett-Packard",
        key: "ssd1",
        data: {
            samsung: {
                data: [
                    {
                        id: 1,
                        name: "Samsung",
                        model: "970 EVO Plus 500GB",
                        image: "ssd_images/samsung_970_evo_plus_500gb.png",
                        brand: "Samsung",
                        type: "SSD",
                        capacity: 500, // ГБ
                        readSpeed: 3500, // МБ/с
                        writeSpeed: 3300, // МБ/с
                        interface: "NVMe",
                        price: 7000
                    },
                    {
                        id: 2,
                        name: "Samsung",
                        model: "860 EVO 1TB",
                        image: "ssd_images/samsung_860_evo_1tb.png",
                        brand: "Samsung",
                        type: "SSD",
                        capacity: 1000, // ГБ
                        readSpeed: 550, // МБ/с
                        writeSpeed: 520, // МБ/с
                        interface: "SATA III",
                        price: 8000
                    }
                ],
                name: "Samsung"
            },
            crucial: {
                data: [
                    {
                        id: 1,
                        name: "Crucial",
                        model: "MX500 250GB",
                        image: "ssd_images/crucial_mx500_250gb.png",
                        brand: "Crucial",
                        type: "SSD",
                        capacity: 250, // ГБ
                        readSpeed: 550, // МБ/с
                        writeSpeed: 500, // МБ/с
                        interface: "SATA III",
                        price: 4000
                    },
                    {
                        id: 2,
                        name: "Crucial",
                        model: "P5 1TB",
                        image: "ssd_images/crucial_p5_1tb.png",
                        brand: "Crucial",
                        type: "SSD",
                        capacity: 1000, // ГБ
                        readSpeed: 3400, // МБ/с
                        writeSpeed: 3000, // МБ/с
                        interface: "NVMe",
                        price: 9000
                    }
                ],
                name: "Crucial"
            },
            westernDigital: {
                data: [
                    {
                        id: 1,
                        name: "Western Digital",
                        model: "WD Blue SN550 500GB",
                        image: "ssd_images/wd_blue_sn550_500gb.png",
                        brand: "Western Digital",
                        type: "SSD",
                        capacity: 500, // ГБ
                        readSpeed: 2400, // МБ/с
                        writeSpeed: 1750, // МБ/с
                        interface: "NVMe",
                        price: 5000
                    },
                    {
                        id: 2,
                        name: "Western Digital",
                        model: "WD Black SN750 1TB",
                        image: "ssd_images/wd_black_sn750_1tb.png",
                        brand: "Western Digital",
                        type: "SSD",
                        capacity: 1000, // ГБ
                        readSpeed: 3470, // МБ/с
                        writeSpeed: 3000, // МБ/с
                        interface: "NVMe",
                        price: 12000
                    }
                ],
                name: "Western Digital"
            }
        }

    },
    {
        id: 8,
        imgSrc: "/assets/svg/spares/hewlett.svg",
        title: "SSD диск 2",
        description: "",
        key: "ssd2",
        data: {
            samsung: {
                data: [
                    {
                        id: 1,
                        name: "Samsung",
                        model: "970 EVO Plus 500GB",
                        image: "ssd_images/samsung_970_evo_plus_500gb.png",
                        brand: "Samsung",
                        type: "SSD",
                        capacity: 500, // ГБ
                        readSpeed: 3500, // МБ/с
                        writeSpeed: 3300, // МБ/с
                        interface: "NVMe",
                        price: 7000
                    },
                    {
                        id: 2,
                        name: "Samsung",
                        model: "860 EVO 1TB",
                        image: "ssd_images/samsung_860_evo_1tb.png",
                        brand: "Samsung",
                        type: "SSD",
                        capacity: 1000, // ГБ
                        readSpeed: 550, // МБ/с
                        writeSpeed: 520, // МБ/с
                        interface: "SATA III",
                        price: 8000
                    }
                ],
                name: "Samsung"
            },
            crucial: {
                data: [
                    {
                        id: 1,
                        name: "Crucial",
                        model: "MX500 250GB",
                        image: "ssd_images/crucial_mx500_250gb.png",
                        brand: "Crucial",
                        type: "SSD",
                        capacity: 250, // ГБ
                        readSpeed: 550, // МБ/с
                        writeSpeed: 500, // МБ/с
                        interface: "SATA III",
                        price: 4000
                    },
                    {
                        id: 2,
                        name: "Crucial",
                        model: "P5 1TB",
                        image: "ssd_images/crucial_p5_1tb.png",
                        brand: "Crucial",
                        type: "SSD",
                        capacity: 1000, // ГБ
                        readSpeed: 3400, // МБ/с
                        writeSpeed: 3000, // МБ/с
                        interface: "NVMe",
                        price: 9000
                    }
                ],
                name: "Crucial"
            },
            westernDigital: {
                data: [
                    {
                        id: 1,
                        name: "Western Digital",
                        model: "WD Blue SN550 500GB",
                        image: "ssd_images/wd_blue_sn550_500gb.png",
                        brand: "Western Digital",
                        type: "SSD",
                        capacity: 500, // ГБ
                        readSpeed: 2400, // МБ/с
                        writeSpeed: 1750, // МБ/с
                        interface: "NVMe",
                        price: 5000
                    },
                    {
                        id: 2,
                        name: "Western Digital",
                        model: "WD Black SN750 1TB",
                        image: "ssd_images/wd_black_sn750_1tb.png",
                        brand: "Western Digital",
                        type: "SSD",
                        capacity: 1000, // ГБ
                        readSpeed: 3470, // МБ/с
                        writeSpeed: 3000, // МБ/с
                        interface: "NVMe",
                        price: 12000
                    }
                ],
                name: "Western Digital"
            }
        }

    },
    {
        id: 9,
        imgSrc: "/assets/svg/spares/withoutDrive.svg",
        title: "DVD-привод",
        description: "Без привода",
        dvdDrive: "dvdDrive",
        data: {
            lg: {
                data: [
                    {
                        id: 1,
                        name: "LG",
                        model: "GH24NSC0",
                        image: "dvd_images/lg_gh24nsc0.png",
                        brand: "LG",
                        type: "DVD-RW",
                        readSpeed: 24, // Скорость чтения, скоростей CD
                        writeSpeed: 24, // Скорость записи, скоростей CD
                        interface: "SATA",
                        price: 2000
                    },
                    {
                        id: 2,
                        name: "LG",
                        model: "GP60NB50",
                        image: "dvd_images/lg_gp60nb50.png",
                        brand: "LG",
                        type: "External DVD-RW",
                        readSpeed: 8, // Скорость чтения, МБ/с
                        writeSpeed: 8, // Скорость записи, МБ/с
                        interface: "USB 2.0",
                        price: 3000
                    }
                ],
                name: "LG"
            },
            asus: {
                data: [
                    {
                        id: 1,
                        name: "ASUS",
                        model: "DRW-24B1ST",
                        image: "dvd_images/asus_drw_24b1st.png",
                        brand: "ASUS",
                        type: "DVD-RW",
                        readSpeed: 24, // Скорость чтения, скоростей CD
                        writeSpeed: 24, // Скорость записи, скоростей CD
                        interface: "SATA",
                        price: 2500
                    },
                    {
                        id: 2,
                        name: "ASUS",
                        model: "ZW-16D1X",
                        image: "dvd_images/asus_zw_16d1x.png",
                        brand: "ASUS",
                        type: "External DVD-RW",
                        readSpeed: 8, // Скорость чтения, МБ/с
                        writeSpeed: 8, // Скорость записи, МБ/с
                        interface: "USB 3.0",
                        price: 3500
                    }
                ],
                name: "ASUS"
            },
            pioneer: {
                data: [
                    {
                        id: 1,
                        name: "Pioneer",
                        model: "DVR-221LP",
                        image: "dvd_images/pioneer_dvr_221lp.png",
                        brand: "Pioneer",
                        type: "DVD-RW",
                        readSpeed: 24, // Скорость чтения, скоростей CD
                        writeSpeed: 24, // Скорость записи, скоростей CD
                        interface: "SATA",
                        price: 2200
                    },
                    {
                        id: 2,
                        name: "Pioneer",
                        model: "BDR-XD05B",
                        image: "dvd_images/pioneer_bdr_xd05b.png",
                        brand: "Pioneer",
                        type: "External Blu-ray/DVD-RW",
                        readSpeed: 6, // Скорость чтения, скоростей Blu-ray
                        writeSpeed: 6, // Скорость записи, скоростей Blu-ray
                        interface: "USB 3.0",
                        price: 7500
                    }
                ],
                name: "Pioneer"
            }
        }

    },
    {
        id: 10,
        imgSrc: "/assets/svg/spares/powerCase.svg",
        title: "Корпус",
        description: "POWERCASE MISTRAL X4 W",
        key: "case",
        data: {
            coolerMaster: {
                data: [
                    {
                        id: 1,
                        name: "Cooler Master",
                        model: "MasterBox Q300L",
                        image: "case_images/cooler_master_masterbox_q300l.png",
                        brand: "Cooler Master",
                        type: "Mini Tower",
                        motherboardCompatibility: ["ATX", "Micro-ATX", "Mini-ITX"],
                        dimensions: "386 x 230 x 450 мм",
                        price: 4500
                    },
                    {
                        id: 2,
                        name: "Cooler Master",
                        model: "MasterCase H500",
                        image: "case_images/cooler_master_mastercase_h500.png",
                        brand: "Cooler Master",
                        type: "Mid Tower",
                        motherboardCompatibility: ["ATX", "Micro-ATX", "Mini-ITX"],
                        dimensions: "510 x 220 x 480 мм",
                        price: 8500
                    }
                ],
                name: "Cooler Master"
            },
            nzxt: {
                data: [
                    {
                        id: 1,
                        name: "NZXT",
                        model: "H510",
                        image: "case_images/nzxt_h510.png",
                        brand: "NZXT",
                        type: "Mid Tower",
                        motherboardCompatibility: ["ATX", "Micro-ATX", "Mini-ITX"],
                        dimensions: "410 x 210 x 460 мм",
                        price: 7000
                    },
                    {
                        id: 2,
                        name: "NZXT",
                        model: "H510 Elite",
                        image: "case_images/nzxt_h510_elite.png",
                        brand: "NZXT",
                        type: "Mid Tower",
                        motherboardCompatibility: ["ATX", "Micro-ATX", "Mini-ITX"],
                        dimensions: "410 x 210 x 460 мм",
                        price: 10000
                    }
                ],
                name: "NZXT"
            },
            fractalDesign: {
                data: [
                    {
                        id: 1,
                        name: "Fractal Design",
                        model: "Define R6",
                        image: "case_images/fractal_design_define_r6.png",
                        brand: "Fractal Design",
                        type: "Mid Tower",
                        motherboardCompatibility: ["ATX", "Micro-ATX", "Mini-ITX"],
                        dimensions: "540 x 233 x 465 мм",
                        price: 12000
                    },
                    {
                        id: 2,
                        name: "Fractal Design",
                        model: "Meshify C",
                        image: "case_images/fractal_design_meshify_c.png",
                        brand: "Fractal Design",
                        type: "Mid Tower",
                        motherboardCompatibility: ["ATX", "Micro-ATX", "Mini-ITX"],
                        dimensions: "465 x 210 x 475 мм",
                        price: 8000
                    }
                ],
                name: "Fractal Design"
            }
        }
    },
    {
        id: 11,
        imgSrc: "/assets/svg/spares/raidMax.svg",
        title: "Блок питания",
        description: "500W RaidMax",
        key: "psu",
        data: {
            corsair: {
                data: [
                    {
                        id: 1,
                        name: "Corsair",
                        model: "RM750x",
                        image: "psu_images/corsair_rm750x.png",
                        brand: "Corsair",
                        type: "ATX",
                        wattage: 750, // Вт
                        efficiency: "80 PLUS Gold",
                        modular: "Fully Modular",
                        price: 10000
                    },
                    {
                        id: 2,
                        name: "Corsair",
                        model: "CV550",
                        image: "psu_images/corsair_cv550.png",
                        brand: "Corsair",
                        type: "ATX",
                        wattage: 550, // Вт
                        efficiency: "80 PLUS Bronze",
                        modular: "Non-Modular",
                        price: 5000
                    }
                ],
                name: "Corsair"
            },
            seasonic: {
                data: [
                    {
                        id: 1,
                        name: "Seasonic",
                        model: "Focus GX-750",
                        image: "psu_images/seasonic_focus_gx750.png",
                        brand: "Seasonic",
                        type: "ATX",
                        wattage: 750, // Вт
                        efficiency: "80 PLUS Gold",
                        modular: "Fully Modular",
                        price: 12000
                    },
                    {
                        id: 2,
                        name: "Seasonic",
                        model: "S12III 500W",
                        image: "psu_images/seasonic_s12iii_500w.png",
                        brand: "Seasonic",
                        type: "ATX",
                        wattage: 500, // Вт
                        efficiency: "80 PLUS Bronze",
                        modular: "Non-Modular",
                        price: 4500
                    }
                ],
                name: "Seasonic"
            },
            beQuiet: {
                data: [
                    {
                        id: 1,
                        name: "be quiet!",
                        model: "Straight Power 11 750W",
                        image: "psu_images/bequiet_straight_power_11_750w.png",
                        brand: "be quiet!",
                        type: "ATX",
                        wattage: 750, // Вт
                        efficiency: "80 PLUS Platinum",
                        modular: "Fully Modular",
                        price: 13000
                    },
                    {
                        id: 2,
                        name: "be quiet!",
                        model: "Pure Power 11 500W",
                        image: "psu_images/bequiet_pure_power_11_500w.png",
                        brand: "be quiet!",
                        type: "ATX",
                        wattage: 500, // Вт
                        efficiency: "80 PLUS Gold",
                        modular: "Non-Modular",
                        price: 6000
                    }
                ],
                name: "be quiet!"
            }
        }

    },
    {
        id: 12,
        imgSrc: "/assets/svg/spares/wiFi.svg",
        title: "Wi-Fi адаптер",
        description: "Не установлено",
        key: "wifiAdapter",
        data: {
            asus: {
                data: [
                    {
                        id: 1,
                        name: "ASUS",
                        model: "PCE-N15",
                        image: "wifi_images/asus_pce_n15.png",
                        brand: "ASUS",
                        type: "Internal Wi-Fi Adapter",
                        speed: "300 Mbps",
                        interface: "PCIe",
                        frequency: "2.4 GHz",
                        price: 2500
                    }
                ],
                name: "ASUS"
            },
            tpLink: {
                data: [
                    {
                        id: 2,
                        name: "TP-Link",
                        model: "TL-WN881ND",
                        image: "wifi_images/tp_link_tl_wn881nd.png",
                        brand: "TP-Link",
                        type: "Internal Wi-Fi Adapter",
                        speed: "300 Mbps",
                        interface: "PCIe",
                        frequency: "2.4 GHz",
                        price: 2200
                    }
                ],
                name: "TP-Link"
            },
            gigabyte: {
                data: [
                    {
                        id: 3,
                        name: "Gigabyte",
                        model: "GC-WB867D-I",
                        image: "wifi_images/gigabyte_gc_wb867d_i.png",
                        brand: "Gigabyte",
                        type: "Internal Wi-Fi Adapter",
                        speed: "867 Mbps",
                        interface: "PCIe",
                        frequency: "2.4/5 GHz",
                        price: 3000
                    }
                ],
                name: "Gigabyte"
            },
            intel: {
                data: [
                    {
                        id: 4,
                        name: "Intel",
                        model: "Wi-Fi 6 AX200",
                        image: "wifi_images/intel_ax200.png",
                        brand: "Intel",
                        type: "Internal Wi-Fi Adapter",
                        speed: "2400 Mbps",
                        interface: "M.2",
                        frequency: "2.4/5 GHz",
                        price: 4500
                    }
                ],
                name: "Intel"
            }
        }

    },
    {
        id: 13,
        imgSrc: "/assets/svg/spares/graphic.svg",
        title: "Звуковая карта",
        description: "Звуковая карта",
        key: "soundCard",
        data: {
            creative: {
                data: [
                    {
                        id: 1,
                        name: "Creative",
                        model: "Sound Blaster Z",
                        image: "sound_cards/creative_sound_blaster_z.png",
                        brand: "Creative",
                        type: "Internal Sound Card",
                        interface: "PCIe",
                        channels: "5.1",
                        sampleRate: "192 kHz",
                        bitDepth: "24-bit",
                        price: 6000
                    }
                ],
                name: "Creative"
            },
            asus: {
                data: [
                    {
                        id: 2,
                        name: "ASUS",
                        model: "Xonar AE",
                        image: "sound_cards/asus_xonar_ae.png",
                        brand: "ASUS",
                        type: "Internal Sound Card",
                        interface: "PCIe",
                        channels: "7.1",
                        sampleRate: "192 kHz",
                        bitDepth: "24-bit",
                        price: 5000
                    }
                ],
                name: "ASUS"
            },
            focusrite: {
                data: [
                    {
                        id: 3,
                        name: "Focusrite",
                        model: "Scarlett 2i2",
                        image: "sound_cards/focusrite_scarlett_2i2.png",
                        brand: "Focusrite",
                        type: "External Sound Card",
                        interface: "USB",
                        channels: "2",
                        sampleRate: "192 kHz",
                        bitDepth: "24-bit",
                        price: 12000
                    }
                ],
                name: "Focusrite"
            },
            behringer: {
                data: [
                    {
                        id: 4,
                        name: "Behringer",
                        model: "UMC22",
                        image: "sound_cards/behringer_umc22.png",
                        brand: "Behringer",
                        type: "External Sound Card",
                        interface: "USB",
                        channels: "2",
                        sampleRate: "48 kHz",
                        bitDepth: "16-bit",
                        price: 3000
                    }
                ],
                name: "Behringer"
            }
        }

    },
    {
        id: 14,
        imgSrc: "/assets/svg/spares/windows.svg",
        title: "Блок питания",
        description: "Corsair RM750x 750W",
        key: "powerSupply",
        data: {
            corsair: {
                data: [
                    {
                        id: 1,
                        name: "Corsair",
                        model: "RM750x",
                        image: "psu_images/corsair_rm750x.png",
                        brand: "Corsair",
                        type: "ATX",
                        wattage: 750, // Вт
                        efficiency: "80 PLUS Gold",
                        modular: "Fully Modular",
                        price: 10000
                    },
                    {
                        id: 2,
                        name: "Corsair",
                        model: "CV550",
                        image: "psu_images/corsair_cv550.png",
                        brand: "Corsair",
                        type: "ATX",
                        wattage: 550, // Вт
                        efficiency: "80 PLUS Bronze",
                        modular: "Non-Modular",
                        price: 5000
                    }
                ],
                name: "Corsair"
            },
            seasonic: {
                data: [
                    {
                        id: 1,
                        name: "Seasonic",
                        model: "Focus GX-750",
                        image: "psu_images/seasonic_focus_gx750.png",
                        brand: "Seasonic",
                        type: "ATX",
                        wattage: 750, // Вт
                        efficiency: "80 PLUS Gold",
                        modular: "Fully Modular",
                        price: 12000
                    },
                    {
                        id: 2,
                        name: "Seasonic",
                        model: "S12III 500W",
                        image: "psu_images/seasonic_s12iii_500w.png",
                        brand: "Seasonic",
                        type: "ATX",
                        wattage: 500, // Вт
                        efficiency: "80 PLUS Bronze",
                        modular: "Non-Modular",
                        price: 4500
                    }
                ],
                name: "Seasonic"
            },
            beQuiet: {
                data: [
                    {
                        id: 1,
                        name: "be quiet!",
                        model: "Straight Power 11 750W",
                        image: "psu_images/bequiet_straight_power_11_750w.png",
                        brand: "be quiet!",
                        type: "ATX",
                        wattage: 750, // Вт
                        efficiency: "80 PLUS Platinum",
                        modular: "Fully Modular",
                        price: 13000
                    },
                    {
                        id: 2,
                        name: "be quiet!",
                        model: "Pure Power 11 500W",
                        image: "psu_images/bequiet_pure_power_11_500w.png",
                        brand: "be quiet!",
                        type: "ATX",
                        wattage: 500, // Вт
                        efficiency: "80 PLUS Gold",
                        modular: "Non-Modular",
                        price: 6000
                    }
                ],
                name: "be quiet!"
            }
        }

    },
    {
        id: 15,
        imgSrc: "/assets/svg/spares/mouse.svg",
        title: "Мышь",
        description: "",
        key: "mouse",
        data: {
            mouse: [
                {
                    id: 1,
                    name: "Logitech",
                    model: "G502 HERO",
                    image: "mouse_images/logitech_g502_hero.png",
                    brand: "Logitech",
                    type: "Gaming Mouse",
                    dpi: 16000,
                    connection: "Wired/Wireless",
                    features: "RGB Lighting, Programmable Buttons",
                    price: 5500
                },
                {
                    id: 2,
                    name: "Razer",
                    model: "DeathAdder V2",
                    image: "mouse_images/razer_deathadder_v2.png",
                    brand: "Razer",
                    type: "Gaming Mouse",
                    dpi: 20000,
                    connection: "Wired",
                    features: "Ergonomic Design, RGB Lighting",
                    price: 4000
                },
                {
                    id: 3,
                    name: "SteelSeries",
                    model: "Rival 600",
                    image: "mouse_images/steelseries_rival_600.png",
                    brand: "SteelSeries",
                    type: "Gaming Mouse",
                    dpi: 12000,
                    connection: "Wired",
                    features: "Dual Sensor System, RGB Lighting",
                    price: 6000
                },
                {
                    id: 4,
                    name: "Corsair",
                    model: "Harpoon RGB Wireless",
                    image: "mouse_images/corsair_harpoon_rgb_wireless.png",
                    brand: "Corsair",
                    type: "Gaming Mouse",
                    dpi: 10000,
                    connection: "Wireless",
                    features: "Lightweight Design, RGB Lighting",
                    price: 4500
                }
            ]
        }
    },
    {
        id: 16,
        imgSrc: "/assets/svg/spares/mouse.svg",
        title: "Клавиатура",
        description: "",
        key: "keyboard",
        data: {
            logitech: {
                data: [
                    {
                        id: 1,
                        name: "Logitech",
                        model: "G Pro X",
                        image: "keyboard_images/logitech_g_pro_x.png",
                        brand: "Logitech",
                        type: "Mechanical Keyboard",
                        switchType: "GX Blue Clicky",
                        connection: "Wired",
                        backlight: "RGB",
                        price: 12000
                    }
                ],
                name: "Logitech"
            },
            razer: {
                data: [
                    {
                        id: 2,
                        name: "Razer",
                        model: "BlackWidow V3",
                        image: "keyboard_images/razer_blackwidow_v3.png",
                        brand: "Razer",
                        type: "Mechanical Keyboard",
                        switchType: "Razer Green",
                        connection: "Wired",
                        backlight: "RGB",
                        price: 15000
                    }
                ],
                name: "Razer"
            },
            steelseries: {
                data: [
                    {
                        id: 3,
                        name: "SteelSeries",
                        model: "Apex Pro",
                        image: "keyboard_images/steelseries_apex_pro.png",
                        brand: "SteelSeries",
                        type: "Mechanical Keyboard",
                        switchType: "OmniPoint Adjustable",
                        connection: "Wired",
                        backlight: "RGB",
                        price: 18000
                    }
                ],
                name: "SteelSeries"
            },
            corsair: {
                data: [
                    {
                        id: 4,
                        name: "Corsair",
                        model: "K95 RGB Platinum",
                        image: "keyboard_images/corsair_k95_rgb_platinum.png",
                        brand: "Corsair",
                        type: "Mechanical Keyboard",
                        switchType: "Cherry MX Speed",
                        connection: "Wired",
                        backlight: "RGB",
                        price: 16000
                    }
                ],
                name: "Corsair"
            }
        }
    },
];
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

const SidebarLayout = () => {

    const selectedOption = useSelector((state) => state.addProduct.selectedOption);
    useEffect(() => {
        console.log(selectedOption, "redux work");
    }, [selectedOption]);
    return (
        <div className="h-[100vh] pr-2 overflow-y-auto overflow-hidden">
            {components.map((component) => (
                <div key={component.id} className="py-3">
                    <div className="flex items-center">
                        <img className="w-8 h-8 mr-4" src={component.imgSrc} alt={component.title || "Component Image"} />
                        <nav>
                            {component.title && <p className="text-xs font-medium text-gray-400">{component.title}</p>}
                            <h1 className="text-sm">
                                {selectedOption[component.key] ? (
                                    component.key === 'cpu' ? (
                                        `${selectedOption[component.key].model || 'Описание отсуствует'} ${selectedOption[component.key].clockSpeed ? `${selectedOption[component.key].clockSpeed} МГц` : ''}`
                                    ) : (
                                        `${selectedOption[component.key].model || 'Описание отсуствует'} ${selectedOption[component.key].model ? `${selectedOption[component.key].model}` : ''}`
                                    )
                                ) : (
                                    "Описание отсутствует"
                                )}


                            </h1>
                        </nav>
                    </div>
                    <hr className="mt-3 mx-1 border-gray-600" />
                </div>
            ))}
        </div>
    );
};

export default SidebarLayout;