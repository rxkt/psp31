import os
import json

def main():
    # reference files: 11001.json .. 11009.json
    reference_files = [f"110{str(i).zfill(2)}.json" for i in range(1, 10)]

    # related prefixes (excluding 110xx which is the reference set itself)
    related_prefixes = ["100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "111"]

    for ref in reference_files:
        if not os.path.exists(ref):
            print(f"Skipping {ref}, file not found")
            continue

        # load reference JSON
        with open(ref, "r", encoding="utf-8") as f:
            data = json.load(f)

        # reference key (e.g. "11001")
        ref_key = os.path.splitext(ref)[0]

        # get suffix (e.g. "01.json")
        suffix = ref[3:]

        for prefix in related_prefixes:
            target_name = f"{prefix}{suffix}"
            target_key = os.path.splitext(target_name)[0]

            # delete if exists
            if os.path.exists(target_name):
                os.remove(target_name)
                print(f"Deleted old {target_name}")

            # copy and update JSON key
            new_data = {}
            if ref_key in data:
                new_data[target_key] = data[ref_key]
            else:
                print(f"Warning: {ref} does not contain top-level key {ref_key}")
                new_data[target_key] = data  # fallback

            # write new file
            with open(target_name, "w", encoding="utf-8") as f:
                json.dump(new_data, f, indent=2, ensure_ascii=False)

            print(f"Created {target_name} (renamed key {ref_key} → {target_key})")

if __name__ == "__main__":
    main()
