#[cfg(desktop)]
mod tray;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
use tauri_plugin_log::{Target, TargetKind};
use tauri_plugin_store::StoreBuilder;

// #[tauri::command]
// fn greet(name: &str) -> String {
//     format!("Hello, {}! You've been greeted from Rust!", name)
// }

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    // #[cfg(debug_assertions)]
    // let devtools = tauri_plugin_devtools::init(); // initialize the plugin as early as possible

    let mut builder = tauri::Builder::default();

    builder = builder
        .plugin(
            tauri_plugin_log::Builder::new()
                .targets([
                    Target::new(TargetKind::Stdout),
                    Target::new(TargetKind::LogDir { file_name: None }),
                    Target::new(TargetKind::Webview),
                ])
                .build(),
        )
        .plugin(tauri_plugin_store::Builder::default().build())
        .plugin(tauri_plugin_http::init())
        .plugin(tauri_plugin_notification::init())
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_process::init())
        // .invoke_handler(tauri::generate_handler![greet])
        .setup(move |app| {
            let handle = app.handle();

            let mut store = StoreBuilder::new("settings.json").build(handle.clone());
            let _ = store.load();

            // #[cfg(debug_assertions)]
            // handle.plugin(devtools)?;

            #[cfg(desktop)]
            {
                tray::create(handle)?;

                // handle.plugin(tauri_plugin_cli::init())?;
                handle.plugin(tauri_plugin_global_shortcut::Builder::new().build())?;
                handle.plugin(tauri_plugin_updater::Builder::new().build())?;
                handle.plugin(tauri_plugin_updater::Builder::new().build())?;
            }

            #[cfg(mobile)]
            {
                handle.plugin(tauri_plugin_barcode_scanner::init())?;
                handle.plugin(tauri_plugin_nfc::init())?;
                handle.plugin(tauri_plugin_biometric::init())?;
            }

            // let mut webview_window_builder =
            //     WebviewWindowBuilder::new(app, "main", WebviewUrl::default());

            Ok(())
        });

    #[allow(unused_mut)]
    let mut app = builder
        .build(tauri::generate_context!())
        .expect("error while building tauri application");

    #[cfg(target_os = "macos")]
    app.set_activation_policy(tauri::ActivationPolicy::Regular);

    app.run(move |_handle, _event| {
        //
    })
}
