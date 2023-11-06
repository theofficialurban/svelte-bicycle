import { SvelteComponent } from "svelte";
import type BicycleCard from "../../types/BicycleCard";
declare const __propDef: {
    props: {
        BicycleCardComponent?: {
            new (options: import("svelte").ComponentConstructorOptions<{
                store: BicycleCard["Store"];
                class: string;
            }>): {
                [prop: string]: any;
                $$prop_def: {
                    store: BicycleCard["Store"];
                    class: string;
                };
                $$events_def: {
                    faceup: Partial<{
                        _id: number;
                        _image: string;
                        _value: number;
                        _status: "FACEDOWN" | "FACEUP";
                        _cover?: string | undefined;
                    }> & {
                        _id: number;
                        _value: number;
                    };
                    facedown: Partial<{
                        _id: number;
                        _image: string;
                        _value: number;
                        _status: "FACEDOWN" | "FACEUP";
                        _cover?: string | undefined;
                    }> & {
                        _id: number;
                        _value: number;
                    };
                    complete: Partial<{
                        _id: number;
                        _image: string;
                        _value: number;
                        _status: "FACEDOWN" | "FACEUP";
                        _cover?: string | undefined;
                    }> & {
                        _id: number;
                        _value: number;
                    };
                };
                $$slot_def: {};
                $capture_state(): void;
                $inject_state(): void;
                $$: any;
                $$set: any;
                $destroy(): void;
                $on<K extends "faceup" | "facedown" | "complete">(type: K, callback: ((e: {
                    faceup: Partial<{
                        _id: number;
                        _image: string;
                        _value: number;
                        _status: "FACEDOWN" | "FACEUP";
                        _cover?: string | undefined;
                    }> & {
                        _id: number;
                        _value: number;
                    };
                    facedown: Partial<{
                        _id: number;
                        _image: string;
                        _value: number;
                        _status: "FACEDOWN" | "FACEUP";
                        _cover?: string | undefined;
                    }> & {
                        _id: number;
                        _value: number;
                    };
                    complete: Partial<{
                        _id: number;
                        _image: string;
                        _value: number;
                        _status: "FACEDOWN" | "FACEUP";
                        _cover?: string | undefined;
                    }> & {
                        _id: number;
                        _value: number;
                    };
                }[K]) => void) | null | undefined): () => void;
                $set(props: Partial<{
                    store: BicycleCard["Store"];
                    class: string;
                }>): void;
            };
        } | undefined;
        store: BicycleCard["Store"];
        class?: string | undefined;
    };
    events: {
        click: MouseEvent;
        keypress: KeyboardEvent;
        faceup: CustomEvent<Partial<{
            _id: number;
            _image: string;
            _value: number;
            _status: "FACEDOWN" | "FACEUP";
            _cover?: string | undefined;
        }> & {
            _id: number;
            _value: number;
        }>;
        facedown: CustomEvent<Partial<{
            _id: number;
            _image: string;
            _value: number;
            _status: "FACEDOWN" | "FACEUP";
            _cover?: string | undefined;
        }> & {
            _id: number;
            _value: number;
        }>;
        complete: CustomEvent<Partial<{
            _id: number;
            _image: string;
            _value: number;
            _status: "FACEDOWN" | "FACEUP";
            _cover?: string | undefined;
        }> & {
            _id: number;
            _value: number;
        }>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type BicycleCardProps = typeof __propDef.props;
export type BicycleCardEvents = typeof __propDef.events;
export type BicycleCardSlots = typeof __propDef.slots;
export default class BicycleCard extends SvelteComponent<BicycleCardProps, BicycleCardEvents, BicycleCardSlots> {
    get BicycleCardComponent(): {
        new (options: import("svelte").ComponentConstructorOptions<{
            store: import("svelte/store").Writable<{
                _id: number;
                _image: string;
                _value: number;
                _status: "FACEDOWN" | "FACEUP";
                _cover?: string | undefined;
            }>;
            class: string;
        }>): {
            [prop: string]: any;
            $$prop_def: {
                store: import("svelte/store").Writable<{
                    _id: number;
                    _image: string;
                    _value: number;
                    _status: "FACEDOWN" | "FACEUP";
                    _cover?: string | undefined;
                }>;
                class: string;
            };
            $$events_def: {
                faceup: Partial<{
                    _id: number;
                    _image: string;
                    _value: number;
                    _status: "FACEDOWN" | "FACEUP";
                    _cover?: string | undefined;
                }> & {
                    _id: number;
                    _value: number;
                };
                facedown: Partial<{
                    _id: number;
                    _image: string;
                    _value: number;
                    _status: "FACEDOWN" | "FACEUP";
                    _cover?: string | undefined;
                }> & {
                    _id: number;
                    _value: number;
                };
                complete: Partial<{
                    _id: number;
                    _image: string;
                    _value: number;
                    _status: "FACEDOWN" | "FACEUP";
                    _cover?: string | undefined;
                }> & {
                    _id: number;
                    _value: number;
                };
            };
            $$slot_def: {};
            $capture_state(): void;
            $inject_state(): void;
            $$: any;
            $$set: any;
            $destroy(): void;
            $on<K extends "faceup" | "facedown" | "complete">(type: K, callback: ((e: {
                faceup: Partial<{
                    _id: number;
                    _image: string;
                    _value: number;
                    _status: "FACEDOWN" | "FACEUP";
                    _cover?: string | undefined;
                }> & {
                    _id: number;
                    _value: number;
                };
                facedown: Partial<{
                    _id: number;
                    _image: string;
                    _value: number;
                    _status: "FACEDOWN" | "FACEUP";
                    _cover?: string | undefined;
                }> & {
                    _id: number;
                    _value: number;
                };
                complete: Partial<{
                    _id: number;
                    _image: string;
                    _value: number;
                    _status: "FACEDOWN" | "FACEUP";
                    _cover?: string | undefined;
                }> & {
                    _id: number;
                    _value: number;
                };
            }[K]) => void) | null | undefined): () => void;
            $set(props: Partial<{
                store: import("svelte/store").Writable<{
                    _id: number;
                    _image: string;
                    _value: number;
                    _status: "FACEDOWN" | "FACEUP";
                    _cover?: string | undefined;
                }>;
                class: string;
            }>): void;
        };
    };
}
export {};
