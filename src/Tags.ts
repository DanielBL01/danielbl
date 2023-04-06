const TagsIdToName: Map<number, string> = new Map<number, string>();
TagsIdToName.set(0, "oop");
TagsIdToName.set(1, "tools");
TagsIdToName.set(2, "miscellaneous");

const TagsNametoId: Map<string, number> = new Map<string, number>();
TagsNametoId.set("oop", 0);
TagsNametoId.set("tools", 1);
TagsNametoId.set("miscellaneous", 2);

export { TagsIdToName, TagsNametoId };
