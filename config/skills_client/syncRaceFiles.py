import os
import shutil

def main():
    # reference files: 11001.json .. 11009.json
    reference_files = [f"110{str(i).zfill(2)}.json" for i in range(1, 10)]

    # related prefixes (excluding 110xx which is the reference set itself)
    related_prefixes = ["100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "111"]

    for ref in reference_files:
        if not os.path.exists(ref):
            print(f"Skipping {ref}, file not found")
            continue

        suffix = ref[3:]  # e.g. "01.json"

        for prefix in related_prefixes:
            target = f"{prefix}{suffix}"

            # delete if target exists
            if os.path.exists(target):
                os.remove(target)
                print(f"Deleted old {target}")

            # copy reference to target
            shutil.copy(ref, target)
            print(f"Copied {ref} -> {target}")

if __name__ == "__main__":
    main()
