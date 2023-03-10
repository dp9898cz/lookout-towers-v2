import { db, storage } from "@/app/firebase";
import { Tower } from "@/typings";
import { normalizeTowerObject } from "@/utils/normalizeTowerObject";
import { collection, getDocs, query, where } from "firebase/firestore";
import { listAll, ref } from "firebase/storage";
import React from "react";
import Carousel from "./Carousel";
import MainInfo from "./MainInfo";

const URL = "https://firebasestorage.googleapis.com/v0/b/";
const BUCKET = "lookout-towers.appspot.com/";
const PATH = "o/towers";

export const revalidate = 1;

type PageProps = {
    params: {
        type: string;
        nameID: string;
    };
};

const getTowerObjectByNameID = async (name_id: string): Promise<Tower> => {
    const q = query(collection(db, "towers"), where("nameID", "==", name_id));
    const snap = await getDocs(q);
    let obj: {} = {};
    snap.forEach((doc) => {
        obj = doc.data();
    });
    return normalizeTowerObject(obj as Tower);
};

const getUrlsOfGalleryImages = async (id: string): Promise<string[]> => {
    const list = await listAll(ref(storage, "towers/" + id));
    return list.items.map((item) => `${URL}${BUCKET}${PATH}%2F${id}%2F${item.name}?alt=media`);
};

async function TowerPage({ params: { type, nameID } }: PageProps) {
    const tower = await getTowerObjectByNameID(nameID);
    const towerImages = await getUrlsOfGalleryImages(tower.id);

    return (
        <div className="flex flex-col">
            <div id={"top"} className={"bg-secondary-content"}>
                <div id={"top-content"} className={"max-w-screen-xl flex flex-row justify-between mx-auto"}>
                    <MainInfo
                        name={tower.name}
                        province={tower.province || ""}
                        country={tower.country}
                        county={tower.county || ""}
                        type={tower.type}
                        stairs={tower.stairs || -1}
                        height={tower.height || -1}
                        elevation={tower.elevation || -1}
                        openingHours={tower.openingHours || "nezn??m??"}
                    />
                    <Carousel images={towerImages} />
                </div>
            </div>
            <div id={"bottom"} className={"max-w-screen-xl flex flex-col items-center mx-auto"}>
                {" "}
            </div>
        </div>
    );
}

export default TowerPage;
