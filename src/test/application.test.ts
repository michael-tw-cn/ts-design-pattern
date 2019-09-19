import {Application} from "../main/application";

test("test application", () => {
    const result = Application.main();
    expect(result).toEqual("hello world");
});