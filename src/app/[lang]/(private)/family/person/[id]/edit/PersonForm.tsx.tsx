"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import Locations from "@/data/locations.json";
import Countries from "@/data/countries.json";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { selfSchema, TSelfSchema } from "@/schema/banshwali/person.schema";

import { convertToFormData } from "@/lib/form";
import CompulsoryLabel from "@/components/form/CompulsoryLabel";
import { ImageUploadBtn } from "@/components/tree/ImageUploadBtn";

import { dictionary } from "@/dictionary";
import FormErr from "@/components/form/FormErr";
import { useBeforeUnload, useNepaliTyping } from "@/hooks";
import { useNoInputScroll } from "@/hooks";
import { useSession } from "@/providers/SessionProvider";
import useScrollToError from "@/hooks/useScrollToError";
import { toast } from "sonner";
import { useEditDetails } from "@/hooks/mutations";

const getMother = (mothers: any[], id: string) => {
  const ownMother = mothers.length > 0 && mothers.find((m) => m.id == id);
  if (ownMother)
    return {
      name: `${ownMother.firstName} ${ownMother.lastName}`,
      id: ownMother.id,
    };
  return null;
};

const EditForm = ({
  lang,
  id,
  data,
  mothers,
}: {
  lang: string;
  id: string;
  data: any;
  mothers: any;
}) => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    trigger,
    formState: { errors, isDirty },
  } = useForm<TSelfSchema>({
    resolver: zodResolver(selfSchema),
    defaultValues: {
      ...data,
      birthDate: data.birthdate,
      mother: data.motherId ? data.motherId : "",
      updateForm: true,
    },
  });
  const { mutateAsync, isPending } = useEditDetails(
    `/family/updateperson/${id}`
  );

  const router = useRouter();
  const [province, setProvince] = useState(data.province ? data.province : "");
  const [district, setDistrict] = useState(data.district ? data.district : "");
  const [municipality, setMunicipality] = useState(
    data.local ? data.local : ""
  );
  const [nonResident, setNonResident] = useState(false);
  const [country, setCountry] = useState("");

  const [status, setStatus] = useState(data.status);
  const isAlive = status === "ALIVE";
  const isDead = status === "DEAD";
  const isContactLess = status === "CONTACTLESS";

  const handleDeathStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value);
  };

  useEffect(() => {
    setValue("status", status);
  }, [status]);

  console.log(errors);

  const onSubmit = async (data: TSelfSchema) => {
    const formData = convertToFormData(data);

    if (data.mother) {
      formData.append("motherId", data.mother);
      formData.append("motherName", getMother(mothers, data.mother)?.name!);
    }

    const promise = mutateAsync(formData).then(() => router.push("/family"));
    toast.promise(promise, {
      loading: "Please wait updating data ....",
      success: "Updated data in banshwali successfully !!",
      error: (err) => err.message || "Couldn't edit your data in Banshwali !",
    });
  };

  // trigger when changing to alive and death
  useEffect(() => {
    if (status !== "ALIVE") {
      trigger();
    }
  }, [status]);

  // CUSTOM HOOKS
  useBeforeUnload(isDirty);
  useScrollToError(errors);
  useNepaliTyping();
  useNoInputScroll();

  /*------------------------------------------------ HANDLES LOCATION CHANGES AND SYNC WITH FORM ---------------------------------------------*/
  useEffect(() => {
    if (province?.length !== 0) {
      setValue(
        "province",
        Locations.provinceList.find((p) => p.name === province)?.name || ""
      );
      trigger("province");
    }
  }, [province]);

  useEffect(() => {
    if (province?.length !== 0) {
      setValue(
        "district",
        Locations.provinceList
          .find((p) => p.name === province)
          ?.districtList.find((d) => d.name === district)?.name || ""
      );
      trigger("district");
    }
  }, [district]);

  useEffect(() => {
    if (district?.length !== 0) {
      setValue(
        "local",
        Locations.provinceList
          .find((p) => p.name === province)
          ?.districtList.find((d) => d.name === district)
          ?.municipalityList.find((m) => m.name === municipality)?.name
      );
      trigger("local");
    }
  }, [municipality]);
  /*-------------------------------------------------- END ------------------------------------------*/

  return (
    <Card className="mx-auto my-12 max-w-6xl">
      <CardHeader className="mb-0 pb-0">
        <CardTitle className="text-lg">{dictionary[lang].titleEdit}</CardTitle>
      </CardHeader>
      <div className="p-4">
        <form
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
        >
          <div className="flex-1">
            <ImageUploadBtn
              url={data.imgurl}
              trigger={trigger}
              setValue={setValue}
            />
            <FormErr>{errors.image?.message}</FormErr>
          </div>

          <div className="flex flex-col flex-wrap gap-4 md:flex-row">
            <div className="flex-1">
              <CompulsoryLabel>{dictionary[lang].firstName}</CompulsoryLabel>
              <Input
                {...register("firstName")}
                placeholder={`Eg : राम `}
                data-nepali="true"
              />
              <FormErr>{errors.firstName?.message}</FormErr>
            </div>

            <div className="flex-1">
              <CompulsoryLabel>{dictionary[lang].lastName}</CompulsoryLabel>
              <Input
                {...register("lastName")}
                defaultValue={getValues("lastName")}
                disabled
                placeholder={`गोदार थापा`}
              />
              <FormErr>{errors.lastName?.message}</FormErr>
            </div>

            <div className="flex-1">
              <CompulsoryLabel>{dictionary[lang].englishName}</CompulsoryLabel>
              <Input
                {...register("englishName")}
                type=""
                placeholder={`Eg : Ram Godar Thapa`}
                className="capitalize"
              />
              <FormErr>{errors.englishName?.message}</FormErr>
            </div>
          </div>

          <div className="flex flex-col flex-wrap gap-4 md:flex-row">
            <div className="flex-1">
              <CompulsoryLabel>{dictionary[lang].index}</CompulsoryLabel>
              <Input {...register("childIndex")} placeholder="Eg: १" />
              <FormErr>{errors.childIndex?.message}</FormErr>
            </div>

            <div className="flex-1">
              <Label>{dictionary[lang].nickName}</Label>
              <Input
                {...register("nickName")}
                placeholder={`Eg : मास्टर साब`}
                data-nepali="true"
              />
              <FormErr>{errors.nickName?.message}</FormErr>
            </div>

            <div className="flex-1">
              {isAlive ? (
                <CompulsoryLabel>{dictionary[lang].birthPlace}</CompulsoryLabel>
              ) : (
                <Label>{dictionary[lang].birthPlace}</Label>
              )}
              <Input
                {...register("birthPlace")}
                placeholder="Eg: काठमाडौँ "
                data-nepali="true"
              />
              <FormErr>{errors.birthPlace?.message}</FormErr>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:flex-row">
            <div className="md:w-1/3">
              {isAlive ? (
                <CompulsoryLabel>{dictionary[lang].profession}</CompulsoryLabel>
              ) : (
                <Label>{dictionary[lang].profession}</Label>
              )}
              <Input
                {...register("profession")}
                placeholder="Eg: शिक्षक"
                data-nepali="true"
              />
              <FormErr>{errors.profession?.message}</FormErr>
            </div>

            <div className="md:w-1/3">
              <Label>{dictionary[lang].origin}</Label>
              <Input
                {...register("origin")}
                placeholder="Eg: काठमाडौँ "
                data-nepali="true"
              />
              <FormErr>{errors.origin?.message}</FormErr>
            </div>

            <div className="md:w-1/3">
              <Label>{dictionary[lang].remarks}</Label>
              <Input
                {...register("remarks")}
                placeholder="Eg: पाँचथर - राँके - ईलाम - बिर्तामोड - काठमाडौं"
                data-nepali="true"
              />
              <FormErr>{errors.remarks?.message}</FormErr>
            </div>
          </div>

          {mothers?.length >= 1 && (
            <div className="flex flex-col flex-wrap gap-4 md:flex-row">
              <div className="md:w-1/3">
                <Label>Mother's Name</Label>
                <select className="select" {...register("mother")}>
                  {mothers.map((m: any) => (
                    <option key={m.id} value={m.id}>
                      {`${m.firstName} ${m.lastName}`}
                    </option>
                  ))}
                  <option value="">माथिको कुनै पनि होइन</option>
                </select>
              </div>
            </div>
          )}

          <div className="my-4 flex items-center gap-4">
            <div className="flex gap-2">
              <input
                onChange={handleDeathStatus}
                id="alive"
                type="radio"
                value="ALIVE"
                checked={status === "ALIVE"}
              />
              <Label htmlFor="alive">{dictionary[lang].alive}</Label>
            </div>

            <div className="flex gap-2">
              <input
                id="dead"
                type="radio"
                value="DEAD"
                onChange={handleDeathStatus}
                checked={isDead}
              />
              <Label htmlFor="dead">{dictionary[lang].dead}</Label>
            </div>

            <div className="flex gap-2">
              <input
                id="contact_less"
                type="radio"
                value="CONTACTLESS"
                onChange={handleDeathStatus}
                checked={isContactLess}
              />
              <Label htmlFor="contact_less">
                {dictionary[lang].contactLess}
              </Label>
            </div>
          </div>

          <div className="flex flex-col flex-wrap gap-4 md:flex-row">
            {isAlive && (
              <div className="md:w-1/3">
                <Label>{dictionary[lang].contact}</Label>
                <Input {...register("phone")} placeholder="Eg: 98xxxxxxxx" />
                <FormErr>{errors.phone?.message}</FormErr>
              </div>
            )}

            <div className="md:w-1/3">
              {isAlive ? (
                <CompulsoryLabel>{dictionary[lang].dob}</CompulsoryLabel>
              ) : (
                <Label>{dictionary[lang].dob}</Label>
              )}
              <Input {...register("birthDate")} placeholder="Eg: १९९९-०१-०१" />
              <FormErr>{errors.birthDate?.message}</FormErr>
            </div>

            {isDead && (
              <div className="md:w-1/3">
                <Label>{dictionary[lang].deathDate}</Label>
                <Input
                  {...register("deathDate")}
                  placeholder="Eg: १९९९-०१-०१"
                  data-nepali="true"
                />
                <FormErr>{errors.deathDate?.message}</FormErr>
              </div>
            )}
          </div>

          {isAlive && (
            <>
              <div>
                <h5 className="my-2 font-semibold">
                  {dictionary[lang].currentAddress}
                  <span className="text-red-500">*</span>
                </h5>
                <div className="flex flex-col flex-wrap gap-4 md:flex-row ">
                  <div className="flex-1">
                    <CompulsoryLabel>
                      {dictionary[lang].province}
                    </CompulsoryLabel>
                    <select
                      className="select"
                      name=""
                      id=""
                      onChange={(e) => {
                        setProvince(e.target.value);
                      }}
                      defaultValue={province}
                    >
                      <option value="" disabled>
                        प्रदेश छनोट गर्नुहोस्
                      </option>
                      {Locations.provinceList.map((province, index) => (
                        <option key={province.id} value={province.name}>
                          {province.name}
                        </option>
                      ))}
                    </select>
                    <FormErr>{errors.province?.message}</FormErr>
                  </div>
                  <div className="flex-1">
                    <CompulsoryLabel>
                      {dictionary[lang].district}
                    </CompulsoryLabel>
                    <select
                      className="select"
                      name=""
                      id=""
                      onChange={(e) => {
                        setDistrict(e.target.value);
                      }}
                      defaultValue={district}
                    >
                      <option value="" disabled>
                        जिल्ला छनोट गर्नुहोस्{" "}
                      </option>
                      {province
                        ? Locations.provinceList
                            .find((p) => p.name === province)
                            ?.districtList.map((district) => (
                              <option key={district.id} value={district.name}>
                                {district.name}
                              </option>
                            ))
                        : null}
                    </select>
                    <FormErr>{errors.district?.message}</FormErr>
                  </div>
                  <div className="flex-1">
                    <CompulsoryLabel>{dictionary[lang].local}</CompulsoryLabel>
                    <select
                      className="select"
                      name=""
                      id=""
                      onChange={(e) => {
                        setMunicipality(e.target.value);
                      }}
                      defaultValue={municipality}
                    >
                      <option value="" disabled>
                        नगरपालिका/गाउँपालिका छनोट गर्नुहोस्
                      </option>
                      {province && district
                        ? Locations.provinceList
                            .find((p) => p.name === province)
                            ?.districtList.find((d) => d.name === district)
                            ?.municipalityList.map((mun) => (
                              <option key={mun.id} value={mun.name}>
                                {mun.name}
                              </option>
                            ))
                        : null}
                    </select>
                    <FormErr>{errors.local?.message}</FormErr>
                  </div>
                </div>
              </div>

              <div>
                <div className="md:w-1/3">
                  <CompulsoryLabel>{dictionary[lang].ward}</CompulsoryLabel>
                  <Input {...register("ward")} placeholder="Eg: ०५" />
                  <FormErr>{errors.ward?.message}</FormErr>
                </div>
              </div>
            </>
          )}

          <div className="flex flex-col flex-wrap gap-4 md:flex-row"></div>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <Label>{dictionary[lang].nonResident}</Label>
              <input
                type="checkbox"
                {...register("isNrn")}
                checked={nonResident}
                onChange={() => {
                  setNonResident(!nonResident);
                }}
              />
              <p className="text-xs text-red-500">
                {errors.isNrn ? errors.isNrn.message : ""}
              </p>
            </div>
            {nonResident ? (
              <div className="w-fit">
                <Label>
                  Country <span className="text-red-500">*</span>
                </Label>
                <select
                  className="select"
                  name=""
                  id=""
                  onChange={(e) => {
                    setCountry(e.target.value);
                  }}
                >
                  <option value="" disabled>
                    देश छनोट गर्नुहोस्
                  </option>
                  {Countries.map((c) => (
                    <option key={c.code} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>
            ) : null}
          </div>

          <Button disabled={isPending} className="self-end">
            {isPending ? dictionary[lang].submitting : dictionary[lang].submit}
          </Button>
        </form>
      </div>
    </Card>
  );
};

export default EditForm;
